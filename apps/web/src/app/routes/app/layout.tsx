import { AppSidebar } from '@/components/templates/sidebar'
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/organisms/sidebar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const navigate = useNavigate()
    const { signOut } = useAuth()

    const userNav = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: '',
    }

    return (
        <SidebarProvider>
            <AppSidebar
                accountRouter={() => navigate('/app/user?p=account')}
                financeRouter={() => navigate('/app/user?p=finance')}
                signOut={signOut}
                user={userNav}
            />
            <SidebarInset>
                <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
                    <div className='flex items-center gap-2 px-4'>
                        <SidebarTrigger className='-ml-1' />
                    </div>
                </header>
                <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
