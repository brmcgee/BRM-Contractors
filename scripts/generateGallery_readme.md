# Generating the Gallery Dataset

This project uses a small Node.js script to build a data file for the front-end gallery. The gallery section of `index.html` reads `assets/gallery-data.json` and automatically displays every image in `assets/gallery`.

Whenever you add, remove, or rename images in the `assets/gallery` directory, regenerate the dataset so the web page stays in sync.

## Steps

1. Open a terminal and navigate to the project root (e.g., `C:\xampp\htdocs\brmcontractor-edit`).
2. Run the script:
   ```bash
   node scripts/generateGalleryData.js
   ```
3. The script will scan `assets/gallery` for files ending in `.jpg`, `.jpeg`, `.png`, `.gif`, or `.ico`.
4. It outputs two files into `assets/`:
   - `gallery-data.json` (used by the browser)
   - `gallery-data.txt` (a human-editable tab-separated list of filenames and titles)

## Editing titles and categories

You can open `assets/gallery-data.txt` in any text editor and change the title portion after the tab. Running the script again will keep the JSON in sync. Alternatively, edit the JSON directly, but be careful with formatting.

The script also assigns **tags** (categories) to each image based on keywords in the filename. These tags drive the filter tabs shown above the gallery on the web page. The keyword-to-category mapping lives near the top of `generateGalleryData.js` and looks like:

```js
const categories = [
  { label: 'Bathroom Remodels', keywords: ['bath'] },
  { label: 'Kitchens', keywords: ['kitchen'] },
  // ...
];
```

If you need to adjust or add categories, update this array and re-run the script. Tags are derived from filenames, so make sure your images use descriptive words (e.g. `bathroom-demo1.jpg`, `deck-repair2.jpg`).

## Requirements

- Node.js must be installed on your machine (v10+).
- No additional npm packages are needed; the script uses only built-in modules.

## Troubleshooting

- If you see an error, ensure the `assets/gallery` directory exists and contains images.
- The script logs the number of entries generated.


---

## Additional UI features

A theme toggle button has been added to the top bar. Clicking it switches between light and dark modes. The preference is stored in `localStorage` and restored on page load. Dark mode uses alternate CSS variable values that you can tweak in `assets/styles.css` under the `.dark-theme` section.

That's it! Keep your gallery up to date by regenerating after any image changes.