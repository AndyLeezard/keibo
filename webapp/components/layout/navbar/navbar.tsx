import React from "react"
import styles from "./header.module.css"
import { useTheme } from "next-themes"
import { ThemeButton } from "./widgets"

type Props = {}

const Navbar = (props: Props) => {
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
      <ThemeButton width={36} height={36} clickCallback={toggleTheme} />
    </div>
  )
}

export default Navbar
