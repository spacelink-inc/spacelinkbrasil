import { Route } from 'react-router-dom'

import { Routes } from 'react-router-dom'
import { Board } from './pages/board'

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Board />} />
        </Routes>
    )
}
