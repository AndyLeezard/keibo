import React from "react"
import styles from "./header.module.css"
import { useTheme } from "next-themes"
import { ThemeButton } from "./widgets"
import { Session } from "next-auth"

type NavbarProps = {
  signIn: () => void
  signOut: () => void
  session: Session | null
}

const Navbar = ({ signIn, signOut, session }: NavbarProps) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (!theme || theme === "system") {
      setTheme(
        Boolean(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        )
          ? "light"
          : "dark"
      )
      return
    }
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div id={styles.wrapper}>
      {/* left header */}
      <div style={{ width: 50, height: "100%" }}>Left</div>
      {/* core section */}
      <div style={{ flex: 1, textAlign: "center" }}>Center</div>
      {/* right header */}
      <div
        onMouseDown={() => {
          session?.user ? signOut() : signIn()
        }}
        style={{ cursor: "pointer" }}
      >
        {session?.user?.email
          ? `Signed in as ${session.user.email}`
          : `Sign in`}
      </div>
      <div style={{ width: 10 }} />
      <ThemeButton width={36} height={36} clickCallback={toggleTheme} />
    </div>
  )
}

export default Navbar
