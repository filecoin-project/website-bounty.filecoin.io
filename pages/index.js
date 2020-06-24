import React, { useRef } from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fellowship from '../components/Fellowship';
import Bounties from '../components/Bounties';

export default () => {
  const bountiesRef = useRef(null);
  const fellowshipRef = useRef(null);
  const pages = {
    bounties: {
      name: 'Bounties',
      ref: bountiesRef,
    },
    fellowship: {
      name: 'Fellowship',
      ref: fellowshipRef,
    },
  };
  return (
    <main>
      <Navbar pages={pages} />
      <Hero />
      <Fellowship ref={fellowshipRef} />
      <Bounties ref={bountiesRef} />
    </main>
  );
};
