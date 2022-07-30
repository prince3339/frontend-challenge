import '../styles/globals.css';
import type { AppProps } from 'next/app';

// components
import { AppLayout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
