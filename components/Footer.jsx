const scrollToRef = (ref) =>
  ref.current.base.scrollIntoView({ behavior: 'smooth', inline: 'start' });

const PageLink = ({ name, clickTo }) => (
  <div className="px-5 py-2">
    <a
      onClick={() => scrollToRef(clickTo)}
      className="text-base leading-6 text-gray-500 hover:text-gray-800 transition duration-200 cursor-pointer"
    >
      {name}
    </a>
  </div>
);

export default ({ pages }) => (
  <div>
    <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <PageLink name={pages.bounties.name} clickTo={pages.bounties.ref} />
        <PageLink name={pages.fellowship.name} clickTo={pages.fellowship.ref} />
        <PageLink name={pages.rules.name} clickTo={pages.rules.ref} />
        <div className="px-5 py-2">
          <a
            href="mailto:security@filecoin.org"
            className="text-base leading-6 text-gray-500 hover:text-gray-800 transition duration-200"
          >
            Submit a Vulnerability
          </a>
        </div>
      </nav>
      <div className="mt-8">
        <p className="text-center mx-auto italic text-gray-400 text-sm">
          Many thanks to the&nbsp;
          <a
            href="https://bounty.ethereum.org/"
            className="underline text-gray-400"
          >
            Ethereum Foundation
          </a>{' '}
          for providing the inspiration for this program.
        </p>
      </div>
    </div>
  </div>
);
