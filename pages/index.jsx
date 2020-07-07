import React, { useRef } from 'react';

// import { fellows } from '../data';
// import { getFellow } from '../getters';

import { fellowData } from '../data';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fellowship from '../components/Fellowship';
import RecentBounties from '../components/RecentBounties';

export default ({ fellows }) => {
  const bountiesRef = useRef(null);
  const fellowshipRef = useRef(null);
  const pages = {
    bounties: {
      name: 'Recent Submissions',
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
      <RecentBounties ref={bountiesRef} />
      <Fellowship fellows={fellows} ref={fellowshipRef} />
    </main>
  );
};

export async function getStaticProps(ctx) {
  // const f = await Promise.all(fellows.map((u) => getFellow(u)));
  return {
    props: {
      // fellows: f,
      fellows: fellowData,
    },
  };
}
