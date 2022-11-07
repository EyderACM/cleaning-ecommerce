import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { trpc } from '../common/client/trpc'
import { SessionProvider } from 'next-auth/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} data-theme="dracula" />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
