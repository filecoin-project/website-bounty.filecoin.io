import React from 'react';

const FellowCard = ({ fellow }) => (
  <div className="card rounded-lg shadow-md bg-brand-gray-700 hover:bg-brand-gray-600 p-4 mb-4">
    <a href={fellow.html_url}>
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-12 w-12 rounded-full"
            src={fellow.avatar_url}
            alt={fellow.login}
          />
        </div>
        <div className="ml-3">
          <p className="text-baseline text-left leading-5 font-semibold text-white">
            {fellow.login}
          </p>
          <p className="text-sm text-left leading-4 font-medium text-gray-300">
            Github &rarr;
          </p>
        </div>
      </div>
    </a>
    <style jsx>{`
      .card {
        flex-basis: calc(33% - 0.5rem);
      }
    `}</style>
  </div>
);

export default ({ fellows }) => {
  return (
    <div className="fellows-wrapper">
      <div className="max-w-5xl p-4 text-center mt-12 md:mt-24 mx-auto">
        <h2 className="text-2xl md:text-3xl mb-5 font-bold">
          Security Research Fellowship
        </h2>
        <p className="mx-auto mb-12">
          The most prolific contributors to Filecoin's security can earn a
          prestigious Filecoin Security Research Fellowship. Fellows receive
          funding for directed or open-ended exploration of Filecoin's security
          model, as well as a venue to discuss the protocol with other top
          experts.
        </p>
        <div className="md:flex justify-between flex-wrap">
          {fellows.map((fellow) => (
            <FellowCard fellow={fellow} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .fellows-wrapper {
          min-height: 600px;
        }
      `}</style>
    </div>
  );
};
