import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Energi Frontend Challenge!</title>
        <meta name="description" content="Energi Frontend Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-center py-20'>
        Hello Energi!
      </main>
    </div>
  )
}

export default Home
