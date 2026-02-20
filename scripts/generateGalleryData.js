const fs = require('fs');
const path = require('path');

// directory containing the gallery images
const galleryDir = path.join(__dirname, '..', 'assets', 'gallery');

if (!fs.existsSync(galleryDir)) {
  console.error('gallery directory not found:', galleryDir);
  process.exit(1);
}

const files = fs.readdirSync(galleryDir).filter(f => /\.(jpe?g|png|gif|ico)$/i.test(f));

// mapping of categories and their matching keywords
const categories = [
  { label: 'Bathroom Remodels', keywords: ['bath'] },
  { label: 'Kitchens', keywords: ['kitchen'] },
  { label: 'Decks', keywords: ['deck'] },
  { label: 'Roofing & Repair', keywords: ['roof', 'shingle', 'metal', 'tile', 'seam'] },
  { label: 'Siding & Gutters', keywords: ['siding', 'gutter', 'soffit', 'fascia'] },
  { label: 'Installations', keywords: ['carport', 'constr'] },
  { label: 'Handyman', keywords: ['carport', 'constr', 'repair', 'door', 'trim', 'paint'] },
  { label: 'Doors', keywords: ['door'] },
  { label: 'Windows', keywords: ['window'] },
  { label: 'Drywall', keywords: ['drywall'] },
  { label: 'Flooring', keywords: ['floor'] },
  { label: 'Garage Doors', keywords: ['gdoor'] },
  { label: 'Home Repair', keywords: ['carport', 'constr', 'repair', 'door', 'trim', 'paint', 'handy'] },
  { label: 'Painting', keywords: ['paint'] },
  { label: 'Plumbing Repair', keywords: ['plumb'] },,

];

const data = files.map(f => {
  // derive a human-readable title from the filename
  const title = f
    .replace(/\.[^/.]+$/, '')           // drop extension
    .replace(/[-_]+/g, ' ')             // change dashes/underscores to spaces
    .replace(/\s+/g, ' ')              // collapse multiple spaces
    .trim();

  const lower = f.toLowerCase();
  // determine matching categories for the file
  const tags = [];
  categories.forEach(cat => {
    for (const kw of cat.keywords) {
      if (lower.includes(kw)) {
        tags.push(cat.label);
        break;
      }
    }
  });

  return { file: f, title, tags };
});

// write a JSON file into assets directory
const outputDir = path.join(__dirname, '..', 'assets');
fs.writeFileSync(path.join(outputDir, 'gallery-data.json'), JSON.stringify(data, null, 2));
// write a simple tab-separated text file for manual editing
fs.writeFileSync(
  path.join(outputDir, 'gallery-data.txt'),
  data.map(d => `${d.file}\t${d.title}`).join('\n')
);

console.log(`Generated ${data.length} gallery entries`);
