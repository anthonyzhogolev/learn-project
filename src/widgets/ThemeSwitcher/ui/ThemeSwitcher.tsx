import { classNames } from 'shared/lib/classNames'
import classes from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import Button, { ThemeButton } from 'shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
