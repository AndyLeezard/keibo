export type ButtonID = "theme" | "lang"

export type DropDown = {
  dimension: number[] /* width and height */
  borderRadius: number
  dismissCallback: () => void
}

export type ButtonBase = {
  width?: number
  height?: number
}

export type ButtonSVG = {
  iconScale?: number
}

export type NavbarButtonProps = ButtonBase & {
  displayDropdown: boolean
  buttonID: ButtonID
  clickCallback: () => void
  dismissCallback: () => void
  dropdownCallback?: () => void
}
