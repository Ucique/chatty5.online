import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const GH_PAT = process.env.GH_PAT;
const OWNER = 'Ucique';
const REPO = 'chatty5.online';
const CATEGORY_NAME = process.env.GISCUS_CATEGORY || 'General';

async function gql(query) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GH_PAT}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  if (!res.ok) throw new Error(`GraphQL failed: ${res.status}`);
  return res.json();
}

async function main() {
  if (!GH_PAT) throw new Error('Missing GH_PAT');
  const q = `
    query {
      repository(owner:"${OWNER}", name:"${REPO}") {
        id
        discussionCategories(first: 50) { nodes { id name } }
      }
    }`;
  const data = await gql(q);
  const repo = data?.data?.repository;
  if (!repo) throw new Error('Repository not found');

  const repoId = repo.id;
  const category = repo.discussionCategories.nodes.find(c => c.name === CATEGORY_NAME)
                  || repo.discussionCategories.nodes[0];
  if (!category) throw new Error('No discussion categories found in repo (create one in UI first)');
  const catId = category.id;

  const snippet = `<!-- Comments (giscus) -->
<section id="comments" class="mt-16">
  <script src="https://giscus.app/client.js"
    data-repo="${OWNER}/${REPO}"
    data-repo-id="${repoId}"
    data-category="${category.name}"
    data-category-id="${catId}"
    data-mapping="pathname"
    data-strict="1"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="dark"
    crossorigin="anonymous"
    async>
  </script>
  <noscript>Enable JavaScript to view comments by giscus.</noscript>
</section>`;

  const partialDir = path.join(root, 'partials');
  fs.mkdirSync(partialDir, { recursive: true });
  fs.writeFileSync(path.join(partialDir, 'giscus.html'), snippet);

  console.log('\u2714 giscus partial written with live repo/category IDs');
}
main().catch(e => {
  console.error(e);
  process.exit(1);
});
