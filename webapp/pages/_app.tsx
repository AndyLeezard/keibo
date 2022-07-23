import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import { Header } from "../components/layout"
import { AppContext } from "../lib/contexts"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <AppContext.Provider value={{}}>
          <Header />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
