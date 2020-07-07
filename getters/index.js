import fetch from 'isomorphic-unfetch';

const GITHUB_URL = 'https://api.github.com';

export const getFellow = (username) =>
  fetch(`${GITHUB_URL}/users/${username}`).then((res) => res.json());
