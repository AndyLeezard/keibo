import React, { useState } from "react"
import styles from "./header.module.css"
import { useTheme } from "next-themes"
import { useSession, signIn, signOut } from "next-auth/react"
import NavbarButton from "./widgets/navbarButton"
import { ButtonID } from "./widgets/types"

type NavbarProps = {
  hideSignin?: boolean
}

const Navbar = ({ hideSignin }: NavbarProps) => {
  const [dropDownID, setDropdownID] = useState<ButtonID | "">("")
  const { data: session } = useSession()
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
      {hideSignin ? (
        <></>
      ) : (
        <div
          onMouseDown={() => {
            session?.user ? signOut() : signIn()
          }}
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          {session?.user?.email
            ? `Signed in as ${session.user.email}`
            : `Sign in`}
        </div>
      )}
      <NavbarButton
        buttonID="lang"
        displayDropdown={dropDownID === "lang"}
        dismissCallback={() => setDropdownID("")}
        clickCallback={() =>
          setDropdownID((prev) => (prev === "lang" ? "" : "lang"))
        }
        dropdownCallback={() => {
          setDropdownID("")
        }}
      />
      <div style={{ width: 5 }} />
      <NavbarButton
        buttonID="theme"
        displayDropdown={dropDownID === "theme"}
        dismissCallback={() => setDropdownID("")}
        clickCallback={toggleTheme}
      />
    </div>
  )
}

export default Navbar
