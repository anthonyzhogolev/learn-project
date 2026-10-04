import { classNames } from 'shared/lib/classNames'
import classes from './Navbar.module.scss'

import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const toggleModal = useCallback(() => { setIsAuthModalOpen(prev => !prev) }, [setIsAuthModalOpen])
    return (
        <div className={classNames(classes.navbar)}>
            <Button onClick={toggleModal} theme={ThemeButton.CLEAR_INVERTED}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModalOpen} onClose={toggleModal}>
                Auth
            </Modal>
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
