# forest.foundation

The landing page for Forest.

- **content.md** holds every word on the page. To change the text, edit this file and push. Nothing else needs to change.
- **assets/** holds the design: `style.css`, the fonts, the icons and the link preview image.
- **build.mjs** turns the two into `dist/`. Vercel runs it on every push (see `vercel.json`). It has no dependencies, and the page has no cookies or outside requests. Its one script, `assets/theme.js`, runs the light/dark switch.

To preview locally: `node build.mjs`, then serve `dist/`, for example with `python3 -m http.server -d dist`.

## How content.md is read

- The header at the top sets the button's label and link.
- `#` is the page title. `##` starts a section.
- A paragraph that opens with a bold label, like `**Profiles.** ...`, becomes an entry. If the label is a question, it folds open in the FAQ. If the label is a link, it becomes a card. If the text has a sentence starting `Now, `, everything before it sits in the walled box.
- `- ` lines are lists. A short line ending in `:` becomes a small heading.
- The build stops if the text contains an em dash.
