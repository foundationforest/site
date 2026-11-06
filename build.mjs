// Turns content.md (the words) and assets/ (the design) into dist/, the site Vercel serves.
// No dependencies: run `node build.mjs`.

import { readFileSync, writeFileSync, rmSync, cpSync } from 'node:fs';

const SITE = 'https://forest.foundation';
const root = new URL('.', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');

// ---------- content.md ----------

let source = read('content.md').replace(/\r\n?/g, '\n');
if (source.includes('\u2014')) throw new Error('content.md contains an em dash.');

const meta = {};
const front = source.match(/^---\n([\s\S]*?)\n---\n/);
if (front) {
  for (const line of front[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  source = source.slice(front[0].length);
}

// Block level: headings, paragraphs, lists.
function parseBlocks(text) {
  const out = [];
  let para = null;
  let list = null;
  const close = () => { para = null; list = null; };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) { close(); continue; }
    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    const item = line.match(/^[-*]\s+(.*)$/);
    if (heading) { close(); out.push({ type: 'h' + heading[1].length, text: heading[2] }); }
    else if (item) { para = null; if (!list) out.push(list = { type: 'list', items: [] }); list.items.push(item[1]); }
    else if (list) list.items[list.items.length - 1] += ' ' + line;
    else if (para) para.text += ' ' + line;
    else out.push(para = { type: 'p', text: line });
  }
  return out;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

// GitHub's mark, mark-github-16 from Primer Octicons 19.42.0 (MIT License, Copyright (c) GitHub Inc.).
const GITHUB = '<svg class="gh" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"/></svg>';

// Links to GitHub carry its mark, and links to GitHub or the index open in a new tab.
function anchor(url, text) {
  const host = (url.match(/^https?:\/\/([^/?#:]+)/i)?.[1] ?? '').toLowerCase();
  const github = /(^|\.)github\.com$/.test(host);
  const tab = github || host === 'index.forest.foundation' ? ' target="_blank" rel="noopener"' : '';
  return `<a href="${attr(url)}"${tab}>${github ? GITHUB : ''}${inline(text)}</a>`;
}

// Inline: links, **bold**, *italic*, and typographic quotes (the same characters, set properly).
function inline(src) {
  const links = [];
  let s = src.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, url) => {
    links.push(anchor(url, text));
    return `\u0000${links.length - 1}\u0000`;
  });
  s = esc(s)
    .replace(/(^|[\s(\[])'/g, '$1‘').replace(/'/g, '’')
    .replace(/(^|[\s(\[])"/g, '$1“').replace(/"/g, '”')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => links[i]);
}

const plain = (src) => src.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*+/g, '');
const slug = (s) => plain(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// "Platforms do X. Now, you do Y." splits at its first "Now,".
const TURN = /(?<=[.?!])\s+(?=Now, )/;

// A paragraph that opens with a bold label ("**Profiles.** ...") is an entry.
function asEntry(text) {
  const m = text.match(/^\*\*(.+?)\*\*\s*(.*)$/);
  if (!m || !/[.?:]$/.test(m[1])) return null;
  const label = m[1];
  const kind = label.endsWith('?') ? 'faq' : label.startsWith('[') ? 'cards' : TURN.test(m[2]) ? 'turns' : 'plain';
  return { label, body: m[2], kind };
}

// ---------- drawings, built from the logo's geometry ----------

// The mark: chevrons 24 wide and 9 tall, 10 apart, with a trunk. Same as the app icon.
function mark(chevrons = 3, cls = 'mark') {
  const h = 38 + (chevrons - 3) * 10;
  let d = '';
  for (let i = 0; i < chevrons; i++) d += `M8 ${12 + i * 10}L20 ${3 + i * 10}L32 ${12 + i * 10}`;
  d += `M20 ${4 + (chevrons - 1) * 10}V${h}`;
  return `<svg class="${cls}" viewBox="0 0 40 ${h + 2}" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
}

function random(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A wide band of marks standing on one ground line, their roots joined underneath.
function forest(seed, cls) {
  const W = 2400, H = 400, G = 250;
  const r = random(seed);
  const between = (a, b) => a + r() * (b - a);
  const n = (v) => Math.round(v * 10) / 10;
  const layers = [
    { name: 'far', gap: [44, 96], size: [1.5, 2.3] },
    { name: 'mid', gap: [80, 170], size: [2.1, 3.1] },
    { name: 'near', gap: [150, 300], size: [2.9, 4.3] },
  ];
  const rooted = [];
  let svg = '';
  for (const layer of layers) {
    let d = '';
    for (let x = between(0, layer.gap[1]); x < W; x += between(...layer.gap)) {
      const s = between(...layer.size);
      let k = 2 + Math.floor(r() * 4);
      const trunk = between(5, 12) * s;
      while (k > 2 && G - ((k - 1) * 10 + 9) * s - trunk < 12) k--;
      const top = G - ((k - 1) * 10 + 9) * s - trunk;
      for (let i = 0; i < k; i++) {
        const y = top + i * 10 * s;
        d += `M${n(x - 12 * s)} ${n(y + 9 * s)}L${n(x)} ${n(y)}L${n(x + 12 * s)} ${n(y + 9 * s)}`;
      }
      d += `M${n(x)} ${n(top + ((k - 1) * 10 + 1) * s)}V${G}`;
      if (layer.name !== 'far') rooted.push(x);
    }
    svg += `<path class="${layer.name}" d="${d}"/>`;
  }
  // Roots: each trunk drops to a knot, and neighboring knots meet in a V, a chevron turned over.
  rooted.sort((a, b) => a - b);
  const knots = rooted.map((x) => [x + between(-24, 24), G + between(34, 74)]);
  let roots = '', dots = '';
  knots.forEach(([x, y], i) => {
    roots += `M${n(rooted[i])} ${G}L${n(x)} ${n(y)}`;
    dots += `<circle cx="${n(x)}" cy="${n(y)}" r="4"/>`;
    const next = knots[i + 1];
    if (!next) return;
    const deep = [n((x + next[0]) / 2 + between(-20, 20)), n(Math.max(y, next[1]) + between(40, 90))];
    roots += `M${n(x)} ${n(y)}L${deep[0]} ${deep[1]}L${n(next[0])} ${n(next[1])}`;
    dots += `<circle cx="${deep[0]}" cy="${deep[1]}" r="3"/>`;
  });
  return `<svg class="forest ${cls}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
<defs><linearGradient id="fade-${seed}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<mask id="under-${seed}" maskUnits="userSpaceOnUse" x="0" y="${G}" width="${W}" height="${H - G}"><rect x="0" y="${G}" width="${W}" height="${H - G}" fill="url(#fade-${seed})"/></mask></defs>
<g class="trees">${svg}</g><path class="ground" d="M0 ${G}H${W}"/>
<g class="roots" mask="url(#under-${seed})"><path d="${roots}"/>${dots}</g></svg>`;
}

// ---------- page ----------

const blocks = parseBlocks(source);
const title = plain(blocks.find((b) => b.type === 'h1')?.text ?? 'Forest');
const firstPara = blocks.find((b) => b.type === 'p')?.text ?? '';
const description = plain(firstPara).split(/(?<=[.?!])\s+/).slice(0, 2).join(' ');

const intro = [];
const sections = [];
for (const b of blocks) {
  if (b.type === 'h1') continue;
  if (b.type === 'h2') sections.push({ title: b.text, blocks: [] });
  else (sections.at(-1)?.blocks ?? intro).push(b);
}

const ARROW = '<svg class="arrow" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2 10L10 2M3.5 2H10V8.5"/></svg>';

// The light/dark switch: a sun in light mode, a moon in dark, drawn like the forest's trees.
// style.css sets its size and place. assets/theme.js runs it.
const SUN = '<svg class="sun" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><circle cx="32" cy="32" r="10"/><path d="M32 4V14M32 50V60M4 32H14M50 32H60M12.2 12.2L19.27 19.27M44.73 44.73L51.8 51.8M12.2 51.8L19.27 44.73M44.73 19.27L51.8 12.2"/></svg>';
const MOON = '<svg class="moon" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M31.68 9.33A22.67 22.67 0 1 0 54.51 34.72A17.33 17.33 0 0 1 31.68 9.33Z"/></svg>';

function renderEntry(e) {
  const label = inline(e.label);
  if (e.kind === 'faq') return `<details><summary>${label}</summary><p>${inline(e.body)}</p></details>`;
  if (e.kind === 'cards') return `<li class="card"><h3>${label}</h3><p>${inline(e.body)}</p>${ARROW}</li>`;
  if (e.kind === 'turns') {
    const at = e.body.search(TURN);
    const then = e.body.slice(0, at), now = e.body.slice(at).trim();
    return `<li class="turn"><h3>${label}</h3><p class="then">${inline(then)}</p><p class="now">${inline(now)}</p></li>`;
  }
  return `<li class="point"><h3>${label}</h3><p>${inline(e.body)}</p></li>`;
}

function renderBlocks(list) {
  let html = '';
  let group = null;
  const flush = () => {
    if (!group) return;
    const tag = group.kind === 'faq' ? 'div' : 'ul';
    html += `<${tag} class="entries ${group.kind}">${group.items.map(renderEntry).join('')}</${tag}>`;
    group = null;
  };
  list.forEach((b, i) => {
    const e = b.type === 'p' ? asEntry(b.text) : null;
    if (e) {
      if (group?.kind !== e.kind) { flush(); group = { kind: e.kind, items: [] }; }
      group.items.push(e);
      return;
    }
    flush();
    if (b.type === 'h3') html += `<h3>${inline(b.text)}</h3>`;
    else if (b.type === 'list') {
      const led = b.items.every((t) => t.startsWith('**'));
      html += `<ul class="${led ? 'next' : 'needs'}">${b.items.map((t) => `<li>${inline(t)}</li>`).join('')}</ul>`;
    } else if (b.text.endsWith(':') && b.text.length < 40) html += `<h3 class="sub">${inline(b.text)}</h3>`;
    else html += `<p${i === 0 ? ' class="lede"' : ''}>${inline(b.text)}</p>`;
  });
  flush();
  return html;
}

const body = sections.map((s) => `
<section id="${slug(s.title)}" class="section">
  <h2>${inline(s.title)}</h2>
  <div class="section-body">${renderBlocks(s.blocks)}</div>
</section>`).join('');

const link = meta.link || 'https://app.forest.foundation';

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#edeae0" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#121a15" media="(prefers-color-scheme: dark)">
<title>${esc(title)}</title>
<meta name="description" content="${attr(description)}">
<link rel="canonical" href="${SITE}/">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE}/">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description)}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/icon-180.png">
<link rel="preload" href="/fonts/literata.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/fraunces.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<script src="/theme.js"></script>
</head>
<body>
<main>
<header class="hero">
  <button class="theme" type="button" aria-label="Dark mode" aria-pressed="false" hidden>${SUN}${MOON}</button>
  <h1>${inline(title)}</h1>
  ${forest(7, 'top')}
  <div class="intro">${renderBlocks(intro)}</div>
</header>
${body}
<div class="dock"><a class="go" href="${attr(link)}">${mark(3, 'go-mark')}<span>${esc(meta.button || title)}</span></a></div>
</main>
<footer class="end">${forest(23, 'bottom')}</footer>
</body>
</html>
`;

if (html.includes('\u2014')) throw new Error('The page contains an em dash.');

const dist = new URL('dist/', root);
rmSync(dist, { recursive: true, force: true });
cpSync(new URL('assets/', root), dist, { recursive: true });
writeFileSync(new URL('index.html', dist), html);
console.log(`Built dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
