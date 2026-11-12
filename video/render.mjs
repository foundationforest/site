// Renders the swap, video/scene.html, to video/the-swap.mp4: node video/render.mjs
// It opens the scene in headless Chromium, draws it at each frame's moment, and pipes every frame to
// ffmpeg. Nothing in the scene depends on the clock, so the same files give the same MP4.
// Needs ffmpeg and Playwright with its Chromium (README.md).
// `node video/render.mjs --still 7.5 out.png` writes one frame instead, for a look at a moment.

import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const { chromium } = createRequire(import.meta.url)('playwright');

const W = 1920, H = 1080, FPS = 30;
const repo = new URL('../', import.meta.url);
const OUT = new URL('the-swap.mp4', import.meta.url);

// The scene asks for the page's files where the site serves them (/style.css, /fonts/, /icon.svg),
// so they are read from assets/ as they are; and for the video's own under /video/.
const TYPES = { html: 'text/html', css: 'text/css', svg: 'image/svg+xml', woff2: 'font/woff2' };
function serve(path) {
  if (path === '/style.css' || path === '/icon.svg' || path.startsWith('/fonts/')) return new URL('assets' + path, repo);
  if (path.startsWith('/video/')) return new URL(path.slice(1), repo);
  return null;
}

async function open() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
  await page.route('**/*', (route) => {
    const url = new URL(route.request().url());
    const file = url.origin === 'http://video.local' ? serve(url.pathname) : null;
    if (!file) return route.fulfill({ status: 404, body: '' });
    route.fulfill({ status: 200, contentType: TYPES[url.pathname.split('.').pop()] ?? 'application/octet-stream', body: readFileSync(file) });
  });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('requestfailed', (r) => errors.push(`${r.url()} failed`));
  page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.url()} ${r.status()}`); });
  await page.goto('http://video.local/video/scene.html');
  const scene = await page.evaluate(() => window.ready);
  if (errors.length) throw new Error(errors.join('\n'));
  return { browser, page, scene };
}

const frame = (page, t) => page.evaluate((t) => window.show(t), t).then(() => page.screenshot({ type: 'png' }));

const still = process.argv.indexOf('--still');
if (still > 0) {
  const t = Number(process.argv[still + 1]);
  const { browser, page } = await open();
  writeFileSync(process.argv[still + 2] ?? 'still.png', await frame(page, t));
  await browser.close();
  process.exit(0);
}

const { browser, page, scene } = await open();
const frames = Math.round(scene.length * FPS);

// x264 at a fixed thread count gives the same bytes every run; bitexact keeps tool versions and dates
// out of the file. Colors are converted for HD video (BT.709) and tagged so players read them back.
const ffmpeg = spawn('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
  '-vf', 'scale=out_color_matrix=bt709:out_range=tv:flags=accurate_rnd+full_chroma_int,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'slow', '-tune', 'animation', '-crf', '16', '-threads', '4',
  '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv',
  '-an', '-map_metadata', '-1', '-fflags', '+bitexact', '-flags:v', '+bitexact', '-movflags', '+faststart',
  OUT.pathname,
], { stdio: ['pipe', 'inherit', 'inherit'] });
const done = new Promise((resolve, reject) => ffmpeg.on('close', (code) => (code ? reject(new Error(`ffmpeg exited ${code}`)) : resolve())));

for (let i = 0; i < frames; i++) {
  const png = await frame(page, i / FPS);
  if (!ffmpeg.stdin.write(png)) await new Promise((r) => ffmpeg.stdin.once('drain', r));
  if (i % 30 === 29) process.stdout.write(`\r${i + 1}/${frames} frames`);
}
ffmpeg.stdin.end();
await done;
await browser.close();
console.log(`\nWrote video/the-swap.mp4 (${frames} frames, ${W}x${H}, ${FPS} fps)`);
