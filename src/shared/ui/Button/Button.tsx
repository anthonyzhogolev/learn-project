import { classNames } from 'shared/lib/classNames'
import classes from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    DEFAULT = 'default',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({ className, children, theme = ThemeButton.DEFAULT, ...other }) => {
    return (
        <button
            className={classNames(classes.Button, { [classes[theme]]: !(theme == null) }, [className])}
            {...other}
        >
            {children}
        </button>
    )
}

export default Button
