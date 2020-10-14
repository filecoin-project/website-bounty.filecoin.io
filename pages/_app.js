import Head from 'next/head';

import '../styles/global.css';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Filecoin Bug Bounty Program</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
