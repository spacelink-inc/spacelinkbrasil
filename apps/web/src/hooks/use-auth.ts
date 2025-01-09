import { SIGN_IN } from '@/app/api/mutations/sign-in'
import { GET_CURRENT_USER } from '@/app/api/queries/get-current-user'
import { apolloClient } from '@/config/apollo-client.config'
import { User } from '@/graphql/graphql'
import { toast } from 'sonner'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type SignInPayload = {
    email: string
    normalizedPassword: string
}

interface AuthStore {
    user?: User
    token?: string
    isLoggingIn?: boolean
    setToken: (token: string) => void
    setUser: (user: User) => void
    setIsLoggingIn: (isLoggingIn: boolean) => void
    refreshUser: () => void
    signIn: (signInPayload: SignInPayload) => Promise<void>
    signOut: () => void
}

export const useAuth = create(
    persist<AuthStore>(
        (set, get) => ({
            signIn: async ({ email, normalizedPassword }) => {
                set({ isLoggingIn: true })
                apolloClient
                    .mutate({
                        mutation: SIGN_IN,
                        variables: {
                            signInInput: {
                                email,
                                normalizedPassword,
                            },
                        },
                    })
                    .then(({ data }) => {
                        set({ isLoggingIn: false })

                        if (!data?.signIn) return

                        toast.success('Seu login foi feito com sucesso')

                        set({
                            user: data.signIn.user,
                            token: data.signIn.accessToken,
                        })
                    })
                    .catch(() => {
                        set({ isLoggingIn: false })
                        toast.error('Error logging in, please try again!')
                    })
            },
            setToken: (token) => {
                set({ token })
            },
            setUser: (user) => {
                set({ user })
            },
            setIsLoggingIn: (isLoggingIn) => {
                set({ isLoggingIn })
            },
            refreshUser: async () => {
                const { user } = get()

                if (!user) return

                apolloClient
                    .query({
                        query: GET_CURRENT_USER,
                        fetchPolicy: 'no-cache',
                    })
                    .then(({ data }) => {
                        if (!data?.getCurrentUser) return

                        set({ user: data.getCurrentUser })
                    })
                    .catch(() => {
                        toast.error('Error refreshing user, please try again!')
                    })
            },
            signOut: () => {
                set({
                    user: undefined,
                    token: undefined,
                })
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
