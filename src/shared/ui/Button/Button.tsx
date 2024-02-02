import { classNames } from 'shared/lib/classNames'
import classes from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme: ThemeButton
}

const Button: FC<ButtonProps> = ({ className, children, theme, ...other }) => {
    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...other}
        >
            {children}
        </button>
    )
}

export default Button
