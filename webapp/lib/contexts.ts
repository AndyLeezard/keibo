import React from "react"

/* export type Theme = "dark" | "light" | undefined

export type Preferences = {
  darkmode: Theme
} */

export interface AppContextInterface {
  /* prefs: Preferences */
}
export const AppContext = React.createContext<AppContextInterface>({
  /* prefs: {
    darkmode: undefined,
  }, */
})
