import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import Navbar from "../components/layout/navbar"
import { AppContext } from "../lib/contexts"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <AppContext.Provider value={{}}>
          <Navbar />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
