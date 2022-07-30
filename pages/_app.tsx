import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr'; 

// components
import { AppLayout } from 'components';

// context
import ContextProvider from 'context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
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
    </ContextProvider>
  )
}

export default MyApp
