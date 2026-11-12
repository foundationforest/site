// Puts the video's test page on preview deployments: run after `node build.mjs`, it adds dist/video/
// (the page, its stylesheet and the-swap.mp4). On production it does nothing, so forest.foundation
// stays exactly what build.mjs makes. Vercel sets VERCEL_ENV; run by hand, it always adds the page.

import { cpSync, mkdirSync } from 'node:fs';

if (process.env.VERCEL_ENV === 'production') {
  console.log('Production build: no video test page.');
  process.exit(0);
}

const dist = new URL('../dist/video/', import.meta.url);
mkdirSync(dist, { recursive: true });
cpSync(new URL('preview/', import.meta.url), dist, { recursive: true });
cpSync(new URL('the-swap.mp4', import.meta.url), new URL('the-swap.mp4', dist));
console.log('Added the video test page to dist/video/');
