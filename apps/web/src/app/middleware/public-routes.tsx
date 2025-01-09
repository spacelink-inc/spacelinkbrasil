import { Navigate } from 'react-router-dom'

import AuthRoutes from '../routes/auth/routes'

export const publicRoutes = [
    {
        path: '/auth/*',
        element: <AuthRoutes />,
    },
    {
        path: '*',
        element: <Navigate to='/auth/login' />,
    },
]
