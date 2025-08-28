import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const content = p => path.join(root, 'content', p);
const out = p => path.join(root, 'dist', p);

// ensure output directory exists
fs.mkdirSync(out('data'), { recursive: true });

function readPosts() {
  const dir = content('posts');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const titleMatch = raw.match(/title:\s*"?(.+?)"?\n/i);
    const dateMatch = raw.match(/date:\s*([0-9\-T:]+)/i);
    const excerptMatch = raw.match(/excerpt:\s*"?(.+?)"?\n/i);
    const title = titleMatch ? titleMatch[1] : f.replace(/\.md$/, '');
    const date = dateMatch ? dateMatch[1] : '';
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    return { slug: f.replace(/\.md$/, ''), title, date, excerpt };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

function readArt() {
  const dir = content('art');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /\.(png|jpe?g|webp|gif)$/i.test(f))
    .map(f => ({ file: `/art/${f}` }));
}

function readShop() {
  const file = content('shop/products.json');
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const posts = readPosts();
const art = readArt();
const products = readShop();

fs.writeFileSync(out('data/posts.json'), JSON.stringify(posts, null, 2));
fs.writeFileSync(out('data/art.json'), JSON.stringify(art, null, 2));
fs.writeFileSync(out('data/products.json'), JSON.stringify(products, null, 2));

console.log('Built: posts.json, art.json, products.json');
