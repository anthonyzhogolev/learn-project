/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import Button, { ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        console.log('toogle')
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    )
}
