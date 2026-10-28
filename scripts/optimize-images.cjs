// Usage: node scripts/optimize-images.cjs [absolute path to a Sharp installation]
// Keeps the source JPEGs; regenerates responsive WebP copies at quality 84.
const path = require('node:path');
const fs = require('node:fs/promises');
const sharp = require(process.argv[2] || 'sharp');

const directory = path.resolve(__dirname, '../dist/assets/photos');
const widths = {

  classic: [360, 720],
  biscoff: [360, 720],
  pepperoni: [360, 720],
};

async function main() {
  for (const [name, sizes] of Object.entries(widths)) {
    const source = path.join(directory, `${name}.jpg`);
    const original = await fs.stat(source);
    for (const width of sizes) {
      const filename = `${name}-${width}.webp`;
      const result = await sharp(source)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 84, effort: 6 })
        .toFile(path.join(directory, filename));
      console.log(`${filename}: ${result.width}x${result.height}, ${result.size} bytes (${(100 * (1 - result.size / original.size)).toFixed(1)}% smaller than source)`);
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
