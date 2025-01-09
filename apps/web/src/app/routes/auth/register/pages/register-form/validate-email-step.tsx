import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { useSearchParams } from '@/hooks/use-url-params'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    ValidateCodeSchema,
    ValidateCodeType,
} from '../../types/validate-code-schema'
import { Checkbox } from '@/components/atoms/checkbox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { VERIFY_REGISTRATION_CODE } from '@/app/api/mutations/verify-registration-code'
import { toast } from 'sonner'

export const ValidateEmailStep = () => {
    const { setParam } = useSearchParams()
    const [verifyRegistrationCode] = useMutation(VERIFY_REGISTRATION_CODE)

    const { register, handleSubmit, setValue } = useForm<ValidateCodeType>({
        resolver: zodResolver(ValidateCodeSchema),
    })

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        setValue('acceptTerms', !isChecked)
    }

    const isLoggingIn = false

    const handleCacheData = () => {
        setParam('step', '3')
    }

    const handleVerifyRegistrationCode = async (data: ValidateCodeType) => {
        const { code } = data
        const email = sessionStorage.getItem('email')
        await verifyRegistrationCode({
            variables: { email, code },
        })
            .then(({ data }) => {
                if (data.verifyRegistrationCode) {
                    toast.success('Email validado com sucesso')
                    handleCacheData()
                } else {
                    toast.warning('Seu código não é válido', {
                        action: {
                            label: 'Reenviar',
                            onClick: () => {
                                console.log('reenviar código')
                            },
                        },
                    })
                }
            })
            .catch((error) => {
                toast.error('Erro ao validar email')
                console.log(error)
            })
    }

    return (
        <form
            onSubmit={handleSubmit(handleVerifyRegistrationCode)}
            className={cn('flex flex-col gap-6')}
        >
            <div className='flex flex-col items-center gap-2 text-center'>
                <span className='flex flex-row gap-2 text-2xl font-bold'>
                    Vamos validar seu email
                </span>
                <p className='text-balance text-xs text-muted-foreground'>
                    Insira o código de verificação que enviamos para o seu
                    email.
                </p>
            </div>
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Código de verificação</Label>
                    <Input
                        id='code'
                        type='text'
                        placeholder='123456'
                        required
                        {...register('code')}
                    />
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <Checkbox
                        checked={isChecked}
                        onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor='acceptTerms'>
                        Aceito os{' '}
                        <Link to='/terms' target='_blank' className='underline'>
                            termos de uso
                        </Link>{' '}
                        e a{' '}
                        <Link
                            to='/privacy'
                            target='_blank'
                            className='underline'
                        >
                            política de privacidade
                        </Link>
                    </Label>
                </div>
                {isLoggingIn ? (
                    <Button disabled>
                        <Loader2 className='animate-spin' />
                        Aguarde
                    </Button>
                ) : (
                    <Button type='submit'>Prosseguir</Button>
                )}
            </div>
        </form>
    )
}
