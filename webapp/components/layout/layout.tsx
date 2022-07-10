import React from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "./layout.module.css"

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      {/* <Navbar links={data.links} /> */}
      <Head>
        <title>Keibo - Investment Tracker</title>
        <meta name="description" content="Customized real-time simulation & tracking solution for your crypto / NFT / stock / funds investment and trading portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      {/* <Footer /> */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Layout
