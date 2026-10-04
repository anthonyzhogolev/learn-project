import { useMemo, useState, type FC } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Theme,
    type ThemeContextProps
} from '../lib/ThemeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT


interface ThemeContextProviderProps {
    initialTheme?: Theme,
    children?: React.ReactNode
};

export const ThemeContextProvider = ({ children, initialTheme }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

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
