import type { NextPage } from 'next';
import Head from 'next/head';
import Wallet from 'components/wallet/Wallet';

const WalletPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Energi Wallet!</title>
        <meta name="description" content="Energi Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wallet />
      </main>
    </div>
  )
}

export default WalletPage;
