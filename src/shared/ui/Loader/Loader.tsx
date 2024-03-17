import { classNames } from 'shared/lib/classNames'
import './Loader.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => {
    return <div className={classNames('lds-heart', {}, [className])}>
        <div></div>
    </div>
}

export default Loader
