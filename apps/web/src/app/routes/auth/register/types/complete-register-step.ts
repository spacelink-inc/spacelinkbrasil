import { z } from 'zod'

export const CompleteRegisterSchema = z.object({
    code: z.string().optional().nullable(),
    cpf: z.string().min(11),
    phone: z.string().min(11),
})

export type CompleteRegisterType = z.infer<typeof CompleteRegisterSchema>
