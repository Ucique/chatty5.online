import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const targetFiles = ['forum.html', 'index.html'];

const giscus = fs.readFileSync(path.join(root, 'partials', 'giscus.html'), 'utf8');

for (const f of targetFiles) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) continue;
  let html = fs.readFileSync(p, 'utf8');
  if (html.includes('giscus.app/client.js')) {
    console.log(`(skip) already has giscus: ${f}`);
    continue;
  }
  if (html.includes('</body>')) {
    html = html.replace('</body>', `${giscus}\n</body>`);
  } else {
    html = html + `\n${giscus}\n`;
  }
  fs.writeFileSync(p, html);
  console.log(`\u2714 injected giscus into ${f}`);
}
