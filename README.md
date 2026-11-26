# forest.foundation

The landing page for Forest, with its privacy notice and terms.

- **content.md** holds the page's text, word for word. To change the text, edit this file and push. Nothing else needs to change.
- **privacy.md** and **terms.md** hold the text of forest.foundation/privacy and forest.foundation/terms, word for word. Edit the file and push; the page follows. They are plain markdown: `#` the title, `##` sections (each gets an id from its text, so `/terms#telling-us-about-a-problem` works), paragraphs, `- ` bullet lists, `1. ` numbered lists, `| tables |` (a header row, a `---` row, then rows), `[links](https://...)` and `**bold**`.
- **assets/** holds the design: `style.css`, the fonts, the icons and the link preview image.
- **build.mjs** turns the two into `dist/`. Vercel runs it on every push (see `vercel.json`). It has no dependencies, and the page has no cookies or outside requests. Its one script, `assets/theme.js`, runs the light/dark switch.

To preview locally: `node build.mjs`, then serve `dist/`, for example with `python3 -m http.server -d dist`.

## How content.md is read

- `#` is the page title. `##` starts a section. `###` starts a part inside a section; a number in front of it, like `1. `, becomes the part's numeral.
- A paragraph that opens with a bold label, like `**Host.** ...`, becomes an entry. If the label is a link, it becomes a card. If the text has a sentence starting `Now, `, everything before it sits in the walled box.
- A question in bold on its own line becomes a folding FAQ entry, and the paragraph after it is the answer.
- The button says "Try Forest" and opens the app. To change either, put a header at the very top of content.md: `button:` and `link:` lines between two `---` lines.
- The build stops if the text contains an em dash. It does the same for privacy.md and terms.md.
