import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig'

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => {
                return (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                )
            })}
        </Routes>
    )
}

export default AppRouter
