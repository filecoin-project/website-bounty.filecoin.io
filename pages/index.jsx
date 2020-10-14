import React, { useRef } from 'react';

// import { fellows } from '../data';
// import { getFellow } from '../getters';

import fellowData from '../data/fellows.json';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fellowship from '../components/Fellowship';
import RecentBounties from '../components/RecentBounties';
import Rules from '../components/Rules';
import Footer from '../components/Footer';

export default ({ fellows }) => {
  const bountiesRef = useRef(null);
  const fellowshipRef = useRef(null);
  const rulesRef = useRef(null);
  const pages = {
    bounties: {
      name: 'Recent Submissions',
      ref: bountiesRef,
    },
    fellowship: {
      name: 'Fellowship',
      ref: fellowshipRef,
    },
    rules: {
      name: 'Rules & Rewards',
      ref: rulesRef,
    },
  };
  return (
    <main>
      <Navbar pages={pages} />
      <Hero />
      <RecentBounties ref={bountiesRef} />
      <Fellowship fellows={fellows} ref={fellowshipRef} />
      <Rules ref={rulesRef} />
      <Footer pages={pages} />
    </main>
  );
};

export async function getStaticProps(ctx) {
  return {
    props: {
      fellows: fellowData,
    },
  };
}
