import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppPropsWithLayout } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '@/context/authContext'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>オタクの履歴書</title>
        <meta name='description' content='オタク自ら聖地を作ってこう！' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
