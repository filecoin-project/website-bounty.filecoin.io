import React from 'react';
import Link from 'next/link';

import recentBounties from '../data/recentBounties.json';

const BountyCard = ({ info }) => (
  <div className="card-wrapper mt-4 px-4 pt-4 pb-2 bg-gray-600 bg-opacity-25 rounded-lg flex flex-col justify-between">
    <div>
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
    </div>
    <p className="mb-2 text-base">
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Recent Submissions
        </h2>
        <div className="md:flex flex-wrap justify-between">
          {recentBounties.slice(0, 6).map((info) => (
            <BountyCard info={info} />
          ))}
        </div>
        {recentBounties.length > 6 && (
          <span className="inline-block text-brand-200 bg-gray-600 hover:bg-gray-700 bg-opacity-25 rounded-lg mt-4 cursor-pointer px-3 py-2 transition duration-200">
            View all &rarr;
          </span>
        )}
      </div>
      <style jsx>{`
        .bounties-wrapper {
          min-height: 600px;
        }
      `}</style>
    </div>
  );
};
