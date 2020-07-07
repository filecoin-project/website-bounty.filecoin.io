import React, { useState } from 'react';

const scrollToRef = (ref) =>
  ref.current.base.scrollIntoView({ behavior: 'smooth', inline: 'start' });

const HeaderLink = ({ name, clickTo }) => (
  <span
    className="text-gray-500 hover:text-black transition duration-150 cursor-pointer ml-6"
    onClick={() => scrollToRef(clickTo)}
  >
    {name}
  </span>
);

const Hamburger = () => (
  <svg viewBox="0 0 100 80" width="30" height="30">
    <rect width="100" height="12"></rect>
    <rect y="34" width="100" height="12"></rect>
    <rect y="68" width="100" height="12"></rect>
  </svg>
);

const MobileMenu = ({ pages, isActive, setIsActive }) => {
  const handleMenuClick = (ref) => {
    scrollToRef(ref);
    setIsActive(false);
  };
  return (
    <div className="md:hidden flex items-center">
      <div onClick={() => setIsActive((a) => !a)}>
        <Hamburger />
      </div>
      <div className="menu-drawer fixed p-4 pt-0 bg-brand-500 text-white z-20 flex flex-col text-2xl text-right">
        <span
          className="block text-5xl mb-5"
          onClick={() => setIsActive((a) => !a)}
        >
          &times;
        </span>
        <span
          className="block mb-5"
          onClick={() => handleMenuClick(pages.bounties.ref)}
        >
          {pages.bounties.name}
        </span>
        <span
          className="block mb-5"
          onClick={() => handleMenuClick(pages.fellowship.ref)}
        >
          {pages.fellowship.name}
        </span>
      </div>
      <style jsx>{`
        .menu-drawer {
          top: 0;
          right: 0;
          width: 80vw;
          height: 100vh;
          display: ${isActive ? 'block' : 'none'};
        }
      `}</style>
    </div>
  );
};

export default ({ pages }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar-wrapper fixed md:static md:mt-0 p-4 box-border border-b border-gray-300 z-50">
      <div className="flex justify-between">
        <img src="/img/bug-bounty-outline.svg" alt="Filecoin Bug Bounties" />
        <MobileMenu
          pages={pages}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <div className="hidden md:flex items-center">
          <HeaderLink name={pages.bounties.name} clickTo={pages.bounties.ref} />
          <HeaderLink
            name={pages.fellowship.name}
            clickTo={pages.fellowship.ref}
          />
          <span className="text-gray-500 hover:text-black cursor-pointer ml-6">
            Rules
          </span>
          <a href="mailto:security@filecoin.io">
            <button className="border border-gray-500 text-gray-500 border-block rounded-sm transition duration-200 hover:text-black hover:border-black px-3 py-2 ml-5">
              Submit a vulnerability
            </button>
          </a>
        </div>
      </div>
      <style jsx>{`
        .navbar-wrapper {
          background: var(--white);
          width: 100vw;
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
    </nav>
  );
};
