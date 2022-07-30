import '../styles/globals.css';
import type { AppProps } from 'next/app';

// components
import { AppLayout } from 'components';

// context
import ContextProvider from 'context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ContextProvider>
  )
}

export default MyApp
