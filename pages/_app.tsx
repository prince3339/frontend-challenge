import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr'; 

// components
import { AppLayout } from 'components';

// context
import AppContextProvider from 'context/AppContext';
import WalletContextProvider from 'context/WalletContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <WalletContextProvider>
        <SWRConfig 
          value={{
            revalidateOnFocus: true,
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}
        >
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SWRConfig>
      </WalletContextProvider>
    </AppContextProvider>
  )
}

export default MyApp
