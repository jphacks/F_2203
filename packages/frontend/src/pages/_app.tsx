import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppPropsWithLayout } from 'next/app'
import Seo from '@/components/Seo';
import { AuthProvider } from '@/context/authContext'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Seo />
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
