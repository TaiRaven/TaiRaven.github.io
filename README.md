# TaiRaven.github.io

My personal site. Live at https://tairaven.github.io

## How to change what's on the site

**All the words, links, and projects live in one file: `content.js`.**
You don't need to touch `index.html` — that's just the layout and code.

1. Open `content.js` in any editor (Notepad, VS Code, or edit it on github.com).
2. Change the text between the `"quotes"`. Keep the commas and brackets.
3. To add a project, blog post, job, etc.: copy a whole `{ ... }` block, paste it,
   and change the text. To remove one, delete its `{ ... }` block.
4. Save, then publish (below).

Labels in `content.js`:
- `[REAL]` — already your real details.
- `[EXAMPLE]` — placeholder/sample. **Make it true or delete it before publishing.**

### Turn a section on or off
At the top of `content.js` there's a `sections` block. Set any to `false` to
hide that section and its sidebar link — the content stays in the file, just
hidden. Set it back to `true` to bring it back. The sidebar numbers renumber
themselves.

```
sections: {
  writing: false,   // hides the Writing section but keeps the posts below
  ...
}
```

A section also disappears on its own if you delete all of its content (e.g.
remove every `posts` block and Writing vanishes).

### Add a portrait photo
Put a file named `portrait.jpg` next to `index.html`, then set
`portrait: "portrait.jpg"` in `content.js`. Leave it `""` for the placeholder tile.

## How to publish a change

From this folder, in a terminal:

```
git add -A
git commit -m "Update site content"
git push
```

The live site updates in about a minute. Hard-refresh (Ctrl+F5) to skip your browser cache.

## To preview before publishing
Just double-click `index.html` — it opens in your browser and works offline.
(The scroll animations and the routing demo all run with no server needed.)

## Files
- `index.html` — layout + all the code (animations, scroll-spy, the routing demo). Rarely needs editing.
- `content.js` — **everything you edit.**
- `README.md` — this file.

Not needed for the live site (they belong to the Claude Design tool, safe to ignore):
`support.js`, `image-slot.js` — not used here.
