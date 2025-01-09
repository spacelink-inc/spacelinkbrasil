import AuthLayout from '../layout'
import { RegisterWithToken } from './pages/register-form'

export const RegisterRoutes = () => {
    return (
        <AuthLayout>
            <RegisterWithToken />
        </AuthLayout>
    )
}
