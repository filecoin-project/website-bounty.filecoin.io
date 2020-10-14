import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="intro container mx-auto max-w-5xl px-4 md:flex md:items-center">
    <div className="text-center md:text-left md:flex md:justify-center relative pt-12 md:pt-0">
      <div className="logo-container">
        <img
          className="logo"
          src="/img/bug-bounty-logo.png"
          alt="Filecoin Bug Bounty"
        />
      </div>
      <div className="intro-container">
        <h1 className="text-2xl text-gray-700 md:text-4xl mb-6 font-bold tracking-tight">
          Filecoin Bounty Program
        </h1>
        <p>
          The Filecoin Bounty Program provides bounties for bugs. Help identify
          bugs and improve the Filecoin network. The most prolific contributors
          can earn a prestigious Filecoin Security Research Fellowship.
        </p>
        <a href="mailto:security@filecoin.org">
          <button className="bg-brand-500 rounded px-5 py-3 text-white mt-8 text-lg transition duration-200 relative hover:bg-brand-600">
            Submit a vulnerability
          </button>
        </a>
      </div>
    </div>
    <style jsx>{`
      .intro {
        min-height: 500px;
      }
      .logo {
        height: 240px;
        width: auto;
      }
      .logo-container {
        flex-basis: 30%;
        display: flex;
        justify-content: flex-start;
        padding: 1rem;
        box-sizing: border-box;
      }
      .intro-container {
        flex-basis: 70%;
        padding: 0 1rem;
        box-sizing: border-box;
      }
      a.cta-btn {
        padding: 12px 24px;
        color: var(--white);
        background: var(--primary);
        position: relative;
        display: inline-block;
        transition: all 0.2s ease-in-out;
        border-radius: 4px;
      }
      a.cta-btn:hover {
        transform: translateY(-1px);
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
      }
      @media screen and (max-width: 799.8px) {
        .intro {
          flex-direction: column;
          justify-content: center;
          padding: 60px 0;
          margin: 0;
        }
        .logo {
          margin: 0 auto;
          height: 130px;
        }
      }
    `}</style>
  </div>
);
