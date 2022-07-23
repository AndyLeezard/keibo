import React from "react"
import styles from "./header.module.css"
import { useTheme } from "next-themes"
import { ThemeButton } from "./widgets"

type Props = {}

const Header = (props: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <div id={styles.wrapper}>
      {/* left header */}
      <div style={{ width: 50, height: "100%" }}>Left</div>
      {/* core section */}
      <div style={{ flex: 1, textAlign: "center" }}>Center</div>
      {/* right header */}
      <ThemeButton
        width={36}
        height={36}
        clickCallback={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  )
}

export default Header
