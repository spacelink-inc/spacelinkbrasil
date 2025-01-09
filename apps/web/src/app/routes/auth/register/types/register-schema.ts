import { z } from 'zod'

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    name: z.string().min(3),
})

export type RegisterType = z.infer<typeof RegisterSchema>
