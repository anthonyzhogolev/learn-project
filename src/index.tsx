import { Suspense } from 'react'
import { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import PageError from 'widgets/PageError/ui/PageError'

import 'shared/config/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
    <StoreProvider initialState={{ counter: { value: 0 } }}>
        <BrowserRouter>
            <ErrorBoundary fallback={<Suspense fallback=""><PageError /></Suspense>}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)
