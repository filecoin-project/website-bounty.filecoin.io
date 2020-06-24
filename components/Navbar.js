import React from 'react';
import Link from 'next/link';

const scrollToRef = (ref) =>
  ref.current.base.scrollIntoView({ behavior: 'smooth', inline: 'start' });

export default ({ pages }) => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <div className="navbar">
          <img src="/img/bug-bounty-outline.svg" alt="Filecoin Bug Bounties" />
          <div className="links">
            <span onClick={() => scrollToRef(pages.fellowship.ref)}>
              Fellowship
            </span>
            <span onClick={() => scrollToRef(pages.bounties.ref)}>
              Bounties
            </span>
            <span>Rules</span>
            <span>Submit a Vulnerability</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar-wrapper {
          padding: 12px;
          box-sizing: border-box;
          border-bottom: 1px solid var(--light-grey);
          overflow: hidden;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
        }
        .links {
          display: flex;
          align-items: center;
        }
        .links > span {
          color: var(--dark-grey);
          margin-left: 1.5rem;
          cursor: pointer;
          padding: 12px 0;
        }
        .links > span:hover {
          color: var(--black);
        }
        img {
          height: 48px;
        }
        @media screen and (max-width: 599.8px) {
          .links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
