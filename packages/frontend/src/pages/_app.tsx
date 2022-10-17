import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppPropsWithLayout } from 'next/app'
import { AuthProvider } from '@/context/authContext'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>,
  )
}

export default MyApp
