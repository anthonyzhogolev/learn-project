import { classNames } from 'shared/lib/classNames'
import classes from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button'

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return <div className={classNames(classes.PageError, {}, [className])}>
        <p>{t('Ошибка')}</p>
        <Button onClick={reloadPage}>
            {t('Обновить страницу')}
        </Button>
    </div>
}

export default PageError
