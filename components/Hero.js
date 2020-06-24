import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="container">
    <div className="intro">
      <div className="logo-container">
        <img
          className="logo"
          src="/img/bug-bounty-logo.png"
          alt="Filecoin Bug Bounty"
        />
      </div>
      <div className="intro-container">
        <h1>Filecoin Bounty Program</h1>
        <p>
          The Filecoin Bounty Program provides bounties for bugs. Help identify
          bugs and improve the Filecoin protocol and clients. The most prolific
          contributors can earn a prestigious Filecoin Security Research
          Fellowship.
        </p>
        <a href="mailto:security@filecoin.io" className="cta-btn">
          Submit a vulnerability
        </a>
      </div>
    </div>
    <style jsx>{`
      .intro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        min-height: 600px;
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
        border-radius: 2px;
        margin-top: 0.5rem;
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
