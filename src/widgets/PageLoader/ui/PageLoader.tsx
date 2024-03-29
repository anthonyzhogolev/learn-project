import { classNames } from 'shared/lib/classNames'
import styles from './PageLoader.module.scss'
import Loader from 'shared/ui/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return <div className={classNames(styles.PageLoader, {}, [className])}>
        <Loader/>
    </div>
}
