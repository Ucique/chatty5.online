import fs from 'fs';
import path from 'path';

const token = process.env.GH_PAT;
const owner = 'Ucique';
const repo = 'chatty5.online';

async function fetchDiscussions() {
  const query = `query {
    repository(owner: "${owner}", name: "${repo}") {
      discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          number
          title
          url
          createdAt
          author { login }
          comments { totalCount }
        }
      }
    }
  }`;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  const json = await res.json();
  const nodes = json?.data?.repository?.discussions?.nodes || [];
  return nodes.map(node => ({
    number: node.number,
    title: node.title,
    url: node.url,
    author: node.author?.login || '',
    createdAt: node.createdAt,
    comments: node.comments?.totalCount || 0
  }));
}

async function main() {
  const topics = await fetchDiscussions();
  // determine paths
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const root = path.resolve(__dirname, '..');
  const outDir = path.join(root, 'dist', 'data');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'forum.json'), JSON.stringify(topics, null, 2));
  console.log('Saved', topics.length, 'forum topics');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
