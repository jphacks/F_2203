import { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
