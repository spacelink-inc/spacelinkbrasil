import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected-routes'
import { publicRoutes } from './public-routes'
import { useAuth } from '@/hooks/use-auth'

export const AppRoutes = () => {
    const { user } = useAuth()

    const routes = user ? protectedRoutes : publicRoutes
    const element = useRoutes([...routes])

    console.log(user)

    return <>{element}</>
}
