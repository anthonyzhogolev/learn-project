import { Suspense } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'
import Loader from 'shared/ui/Loader'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme as string])}>
            <Suspense fallback={<Loader/>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
