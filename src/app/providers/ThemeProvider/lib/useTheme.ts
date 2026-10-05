import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
