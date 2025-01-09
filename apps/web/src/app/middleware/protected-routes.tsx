import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import MainLayout from '../routes/app/layout'
import { DashboardRoutes } from '../routes/app/dashboard/routes'
import { CustomersRoutes } from '../routes/app/customers/routes'

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
    const location = useLocation()

    const isAppRoute = location.pathname.startsWith('/app')

    return (
        <MainLayout>
            <Suspense>
                {isAppRoute && <DashboardRoutes />}
                <Outlet />
            </Suspense>
        </MainLayout>
    )
}

export const protectedRoutes = [
    {
        path: '/app',
        element: <App />,
        exact: true,
        children: [
            { path: 'customers/*', element: <CustomersRoutes /> },
            { path: '*', element: <Navigate to='/app' /> },
        ],
    },
    { path: '*', element: <Navigate to='/app' /> },
]
