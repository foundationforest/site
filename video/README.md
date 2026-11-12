# The video

A short explainer video for Forest, made as code. For now it is a test: one scene, "the swap", 12 seconds, 1920x1080 at 30 frames a second, no sound.

To render it: `node video/render.mjs`. It writes `video/the-swap.mp4` in about half a minute. The same files give the same MP4, byte for byte, with the same versions of Chromium and ffmpeg (rendered here with Playwright 1.63.0's Chromium and ffmpeg 6.1.1).

It needs Node, ffmpeg with libx264, and Playwright with its Chromium (for example `npm install --no-save playwright`, then `npx playwright install chromium`). To look at one moment: `node video/render.mjs --still 7.5 frame.png`.

- **scene.html** draws the scene at any moment: `show(t)`, t in seconds. Nothing in it depends on the clock, so `render.mjs` can step it one frame at a time and pipe each frame to ffmpeg.
- **Where the look comes from.** The page's own `assets/style.css` and `assets/icon.svg` are read as they are at render time: the trees' tones and line weights for the service stacks, the roots' green for the links, Fraunces for the name, the mark beside it. The app's colors and its font for words, which the page doesn't have, come from `app-theme.css`: a copy of the app's `src/theme.css` colors, with the app's own Figtree file in `fonts/`. Where the two name the same thing, the app's wins. To follow a change in the app, copy its `:root` block into `app-theme.css` again and render.
- **The preview page.** On pull request previews, `preview.mjs` puts a page with the video at `/video/`. Production builds skip it, so forest.foundation stays exactly what `build.mjs` makes. `vercel.json` runs it after the build, and lets pages under `/video/` play video, which the site's security header otherwise blocks.
