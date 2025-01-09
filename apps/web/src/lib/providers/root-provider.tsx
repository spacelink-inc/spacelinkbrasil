import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/config/apollo-client.config'
// import { AlertTriangle, CircleCheck } from 'lucide-react'
// import { AlertCircle } from 'lucide-react'

interface RootProviderProps {
    children: React.ReactNode
}

export const RootProvider = ({ children }: RootProviderProps) => {
    return (
        <Suspense>
            <ApolloProvider client={apolloClient}>
                <BrowserRouter>{children}</BrowserRouter>
            </ApolloProvider>
            <Toaster
                richColors
                //  icons={{
                //      error: <AlertCircle className='w-5 h-5' />,
                //      success: <CircleCheck className='w-5 h-5' />,
                //      warning: <AlertTriangle className='w-5 h-5' />,
                //  }}
                //  toastOptions={{
                //      unstyled: true,
                //      duration: 5000,
                //      actionButtonStyle: {
                //          backgroundColor: 'white',
                //          opacity: 0.9,
                //          backdropFilter: 'blur(10px)',
                //          border: 'none',
                //          color: 'black',
                //          padding: '0.2rem 0.3rem',
                //          borderRadius: '0.25rem',
                //          fontSize: '0.7rem',
                //          fontWeight: 'bold',
                //      },
                //      classNames: {
                //          success:
                //              'flex flex-row p-4 items-center gap-2 bg-green-500/50 backdrop-blur-sm border border-green-500 text-white text-xs rounded-md w-full font-mono',
                //          error: 'flex flex-row p-4 items-center gap-2 bg-red-500/50 backdrop-blur-sm border border-red-500 text-white text-xs rounded-md w-full font-mono',
                //          warning:
                //              'flex flex-row p-4 items-center gap-2 bg-yellow-500/50 backdrop-blur-sm border border-yellow-500 text-white text-xs rounded-md w-full font-mono',
                //      },
                //  }}
                position='bottom-right'
            />
        </Suspense>
    )
}
