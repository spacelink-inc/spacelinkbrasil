import z from 'zod'

export const ValidateCodeSchema = z.object({
    code: z.string().min(6),
    acceptTerms: z.boolean(),
})

export type ValidateCodeType = z.infer<typeof ValidateCodeSchema>
