import { useMemo, useState, type FC } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
    type ThemeContextProps
} from '../lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeContextProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultThemeProps: ThemeContextProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultThemeProps}>
            {children}
        </ThemeContext.Provider>
    )
}
