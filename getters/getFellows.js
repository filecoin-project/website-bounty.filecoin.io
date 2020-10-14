const fetch = require('isomorphic-unfetch');
const { writeFileSync } = require('fs');

const GITHUB_URL = 'https://api.github.com';
const FELLOWS = [
  'Leozhang404',
  'dtynn',
  '6block',
  'taoshengshi',
  'IPFS-grandhelmsman',
  'waynewyang',
  'StarLI-Trapdoor',
];

const getFellow = (username) =>
  fetch(`${GITHUB_URL}/users/${username}`).then((res) => res.json());

(async () => {
  const f = await Promise.all(FELLOWS.map((u) => getFellow(u)));
  writeFileSync('./data/fellows.json', JSON.stringify(f));
})();
