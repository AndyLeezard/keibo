import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import { AppContext } from "../lib/contexts"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <SessionProvider session={session}>
          <AppContext.Provider value={{}}>
            <Component {...pageProps} />
          </AppContext.Provider>
        </SessionProvider>
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
