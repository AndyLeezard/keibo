import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

export type OperatingSystem = {
  isTouchDevice: boolean
}

export type Preferences = {
  locale: {
    current: string
    default: string | undefined

    set: (format: string) => void
  }
}

export interface AppContextInterface {
  os: OperatingSystem
  prefs: Preferences
}
export const AppContext = React.createContext<AppContextInterface>({
  os: {
    isTouchDevice: false,
  },
  prefs: {
    locale: {
      current: "en-US",
      default: "",
      set: () => {},
    },
  },
})

export const AppWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  const router = useRouter()
  const { defaultLocale, locales, locale: activeLocale } = router
  const [currentLocale, setCurrentLocale] = useState(
    activeLocale ?? "undefined"
  )
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const lang = localStorage.getItem("lang")
    if (lang) {
      setCurrentLocale(lang)
    }
    const hasTouchScreen = Boolean(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    )
    // msMaxTouchPoints > 0
    if (hasTouchScreen) {
      setIsTouchDevice(hasTouchScreen)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        os: {
          isTouchDevice: isTouchDevice,
        },
        prefs: {
          locale: {
            current: currentLocale,
            default: defaultLocale,
            set: setCurrentLocale,
          },
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
