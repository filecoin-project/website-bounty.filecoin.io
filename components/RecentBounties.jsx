import React from 'react';

const bounties = [
  {
    contributor: 'Leo Zhang',
    contributorLink: 'https://github.com/Leozhang404',
    company: 'IPFSUnion',
    companyLink: 'https://ipfsunion.cn',
    date: '2020-06-09',
    description: `A message that could make the global cron actor's HandleProvingPeriod method crash, allowing miners to continue sealing sectors without submitting WindowPoSts.`,
    fixURL: 'https://github.com/filecoin-project/specs-actors/pull/383',
  },
  {
    contributor: 'Leo Zhang',
    contributorLink: 'https://github.com/Leozhang404',
    company: 'IPFSUnion',
    companyLink: 'https://ipfsunion.cn',
    date: '2020-06-09',
    description: `A message that could make the global cron actor's HandleProvingPeriod method crash, allowing miners to continue sealing sectors without submitting WindowPoSts.`,
    fixURL: 'https://github.com/filecoin-project/specs-actors/pull/383',
  },
];

const BountyCard = ({ info }) => (
  <div className="card-wrapper mt-8 px-4 pt-4 pb-2 bg-gray-600 bg-opacity-25 rounded-lg">
    <a href={info.contributorLink}>
      <h3 className="font-bold text-brand-200 inline hover:underline">
        {info.contributor}
      </h3>
    </a>
    {info.company && (
      <a href={info.companyLink}>
        <h3 className="text-brand-200 italic inline hover:underline ml-4">
          {info.company}
        </h3>
      </a>
    )}
    <p className="text-white text-base my-4">{info.description}</p>
    <p className="my-4 text-base">
      <a className="text-brand-200 hover:underline" href={info.fixURL}>
        Mitigation &rarr;
      </a>
    </p>
    <style jsx>{`
      .card-wrapper {
        flex-basis: calc(50% - 0.5rem);
      }
    `}</style>
  </div>
);

export default () => {
  return (
    <div className="bounties-wrapper bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Recent Submissions
        </h2>
        <div className="md:flex flex-wrap justify-between">
          {bounties.map((info) => (
            <BountyCard info={info} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .bounties-wrapper {
          min-height: 600px;
        }
      `}</style>
    </div>
  );
};
