import { ThemeProvider } from '@/lib/providers/theme-provider'
import { RootProvider } from '@/lib/providers/root-provider'
import { AppRoutes } from './middleware/app-routes'

export const App = () => {
    return (
        <RootProvider>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <AppRoutes />
            </ThemeProvider>
        </RootProvider>
    )
}
