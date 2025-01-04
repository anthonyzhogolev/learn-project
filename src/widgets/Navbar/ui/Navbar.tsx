import { classNames } from 'shared/lib/classNames'
import classes from './Navbar.module.scss'

import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(classes.navbar)}>
            <div className={classNames(classes.links)}>
                <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    )
}
