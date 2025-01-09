import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { useSearchParams } from '@/hooks/use-url-params'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { RegisterSchema, RegisterType } from '../../types/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@apollo/client'
import { CREATE_REGISTRATION_CODE } from '@/app/api/mutations/send-verification-email'
import { toast } from 'sonner'

export const EmailAndPasswordStep = () => {
    const { setParam } = useSearchParams()
    const [sendVerificationEmail, { loading }] = useMutation(
        CREATE_REGISTRATION_CODE
    )

    const { register, handleSubmit } = useForm<RegisterType>({
        resolver: zodResolver(RegisterSchema),
    })

    const handleSendVerificationEmail = async (values: RegisterType) => {
        await sendVerificationEmail({
            variables: {
                email: values.email,
            },
        })
            .then(({ data }) => {
                if (data?.createRegistrationCode) {
                    toast.success('Email enviado com sucesso')

                    sessionStorage.setItem(
                        '@register-step-one',
                        JSON.stringify(values)
                    )

                    sessionStorage.setItem('email', data.email)

                    setParam('step', '2')
                } else {
                    toast.error('Erro ao enviar email')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form
            onSubmit={handleSubmit(handleSendVerificationEmail)}
            className={cn('flex flex-col gap-6')}
        >
            <div className='flex flex-col items-center gap-2 text-center'>
                <span className='flex flex-row gap-2 text-2xl font-bold'>
                    Cadastre-se na plataforma
                </span>
                <p className='text-balance text-xs text-muted-foreground'>
                    Insira suas credenciais para prosseguir com o cadastro.
                </p>
            </div>
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <Label htmlFor='name'>Nome completo</Label>
                    <Input
                        id='name'
                        type='text'
                        placeholder='Nome completo'
                        required
                        {...register('name')}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder='email@exemplo.com.br'
                        required
                        {...register('email')}
                    />
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Senha</Label>
                    <Input
                        id='password'
                        type='password'
                        placeholder='***********'
                        required
                        {...register('password')}
                    />
                </div>{' '}
                <div className='grid gap-2'>
                    <Label htmlFor='password'>Confirmar senha</Label>
                    <Input
                        id='confirmPassword'
                        type='password'
                        placeholder='***********'
                        required
                        {...register('confirmPassword')}
                    />
                </div>
                {loading ? (
                    <Button disabled>
                        <Loader2 className='animate-spin' />
                        Aguarde
                    </Button>
                ) : (
                    <Button type='submit'>Prosseguir</Button>
                )}
                <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                    <span className='relative z-10 bg-background px-2 text-muted-foreground'>
                        Ou faça cadastro com
                    </span>
                </div>
                <Button variant='outline' className='w-full'>
                    <svg
                        viewBox='0 0 512 512'
                        xmlns='http://www.w3.org/2000/svg'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        strokeLinejoin='round'
                        strokeMiterlimit='2'
                    >
                        <path
                            d='M32.582 370.734C15.127 336.291 5.12 297.425 5.12 256c0-41.426 10.007-80.291 27.462-114.735C74.705 57.484 161.047 0 261.12 0c69.12 0 126.836 25.367 171.287 66.793l-73.31 73.309c-26.763-25.135-60.276-38.168-97.977-38.168-66.56 0-123.113 44.917-143.36 105.426-5.12 15.36-8.146 31.65-8.146 48.64 0 16.989 3.026 33.28 8.146 48.64l-.303.232h.303c20.247 60.51 76.8 105.426 143.36 105.426 34.443 0 63.534-9.31 86.341-24.67 27.23-18.152 45.382-45.148 51.433-77.032H261.12v-99.142h241.105c3.025 16.757 4.654 34.211 4.654 52.364 0 77.963-27.927 143.592-76.334 188.276-42.356 39.098-100.305 61.905-169.425 61.905-100.073 0-186.415-57.483-228.538-141.032v-.233z'
                            fill='#fff'
                        />
                    </svg>
                    Cadastre-se com Google
                </Button>
            </div>
        </form>
    )
}
