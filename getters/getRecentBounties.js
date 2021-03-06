const { writeFileSync } = require('fs');

const BOUNTIES = [
  {
    contributor: 'Leo Zhang',
    contributorLink: 'https://github.com/Leozhang404',
    company: 'IPFSUnion',
    companyLink: 'https://ipfsunion.cn',
    date: '2020-06-09',
    description: `A message that could make the global cron actor's HandleProvingPeriod method crash.`,
    fixURL: 'https://github.com/filecoin-project/specs-actors/pull/383',
  },
  {
    contributor: 'Wei Yang',
    contributorLink: 'https://github.com/waynewyang',
    company: 'ARS',
    companyLink: 'https://www.arsyun.com',
    date: '2020-06-11',
    description: `A bug in ConsensusFaultTimeOffsetMining that could lead to incorrectly declared faults.`,
    fixURL: 'https://github.com/filecoin-project/lotus/issues/1988',
  },
  {
    contributor: 'Wei Yang',
    contributorLink: 'https://github.com/waynewyang',
    company: 'ARS',
    companyLink: 'https://www.arsyun.com',
    date: '2020-06-11',
    description: `An issue with the ReportConsensusFault function that caused it to not take effect.`,
    fixURL: 'https://github.com/filecoin-project/lotus/issues/1981',
  },
];

(async () => {
  writeFileSync(
    './data/recentBounties.json',
    JSON.stringify(BOUNTIES.sort((a, b) => b.date - a.date))
  );
})();
