import React, { useMemo } from "react"
import styles from "./widgets.module.css"

type ThemeButton = {
  width: number
  height: number
  clickCallback: () => void
}

const ThemeButton = ({ width, height, clickCallback }: ThemeButton) => {
  const borderRadius = useMemo(() => {
    const scale = 0.1
    return Math.round(((width + height) / 2) * scale)
  }, [width, height])
  const iconScale = useMemo(() => {
    const scale = 0.75
    return Math.min(Math.round(width * scale), Math.round(height * scale))
  }, [width, height])

  return (
    <button
      className={styles.btn}
      style={{
        borderRadius: `${borderRadius}px`,
        width: width,
        height: height,
      }}
      title="Toggle Theme"
      onClick={clickCallback}
    >
      <svg
        className={styles.theme_btn_svg}
        width={iconScale}
        height={iconScale}
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          pathLength="1"
          className={styles.moon}
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        ></path>
        <circle
          pathLength="1"
          className={styles.sun}
          cx="12"
          cy="12"
          r="5"
        ></circle>
        <line
          pathLength="1"
          className={styles.sun}
          x1="12"
          y1="1"
          x2="12"
          y2="3"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="12"
          y1="21"
          x2="12"
          y2="23"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="4.22"
          y1="4.22"
          x2="5.64"
          y2="5.64"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="18.36"
          y1="18.36"
          x2="19.78"
          y2="19.78"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="1"
          y1="12"
          x2="3"
          y2="12"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="21"
          y1="12"
          x2="23"
          y2="12"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="4.22"
          y1="19.78"
          x2="5.64"
          y2="18.36"
        ></line>
        <line
          pathLength="1"
          className={styles.sun}
          x1="18.36"
          y1="5.64"
          x2="19.78"
          y2="4.22"
        ></line>
      </svg>
    </button>
  )
}

export default ThemeButton
