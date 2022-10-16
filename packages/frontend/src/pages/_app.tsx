import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import { AuthProvider } from '@/context/authContext'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>,
  )
}

export default MyApp
