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
        <meta
          name="description"
          content="Customized real-time simulation & tracking solution for your crypto / NFT / stock / funds investment and trading portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      {/* <Footer /> */}
      <footer className={styles.footer}>
        <a
          href="https://github.com/AndyLeezard"
          target="_blank"
          rel="noopener noreferrer"
          style={{ flexDirection: "column" }}
        >
          <span>
            © 2022 Andy Lee
            <span className={styles.logo}>
              <Image
                src="/lizard888.svg"
                alt="Vercel Logo"
                width={16}
                height={16}
              />
            </span>
          </span>
          <span>
            All Rights Reserved
            <span className={styles.logo}>
              <Image
                src="/letter_64.png"
                alt="Vercel Logo"
                width={16}
                height={16}
              />
            </span>
          </span>
        </a>
      </footer>
    </>
  )
}

export default Layout
