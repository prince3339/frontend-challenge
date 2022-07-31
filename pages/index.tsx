import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';

// components
import HomePage from 'components/home/Home';

const Home: NextPage = ({ }) => {
  return (
    <div>
      <Head>
        <title>Energi Frontend Challenge!</title>
        <meta name="description" content="Energi Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}

export default Home
