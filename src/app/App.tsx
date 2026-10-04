import { Suspense, useState } from 'react'

import { AppRouter, useTheme } from 'app/providers'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib';

import { Sidebar } from 'widgets/Sidebar'
import { Loader, Modal } from 'shared/ui'
import { Counter } from 'entities/Counter';
import './styles/index.scss'

export const App = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={classNames('app', {}, [theme as string])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <button onClick={() => { setIsOpen(true) }}>{isOpen ? 'x' : 'open'}</button>
                <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ratione, maiores quia possimus repellendus nam. Fugit ea optio rerum similique voluptates, quasi iure, expedita inventore voluptatibus nulla, id reiciendis recusandae?
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                    <Counter/>
                </div>
            </Suspense>
        </div>
    )
}
