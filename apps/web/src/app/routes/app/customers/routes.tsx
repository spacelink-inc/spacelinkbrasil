import { Route, Routes } from 'react-router-dom'

import CustomersList from './pages/customers-list'

export const CustomersRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CustomersList />} />
        </Routes>
    )
}
