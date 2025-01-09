import { Route, Routes } from 'react-router-dom'

import { LoginRoutes } from './login/routes'
import { RegisterRoutes } from './register/routes'

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path='login' element={<LoginRoutes />} />
            <Route path='register' element={<RegisterRoutes />} />
        </Routes>
    )
}
