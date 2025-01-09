import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { useSearchParams } from '@/hooks/use-url-params'

import { cn } from '@/lib/utils'
import { Barcode, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    CompleteRegisterSchema,
    CompleteRegisterType,
} from '../../types/complete-register-step'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/atoms/select'
import { RadioGroup, RadioGroupItem } from '@/components/atoms/radio-group'
import { CREATE_USER } from '@/app/api/mutations/create-user'
import { useMutation } from '@apollo/client'
import { toast } from 'sonner'
import { SEND_SINGLE_WELCOME_EMAIL } from '@/app/api/mutations/send-single-welcome-email'

export const CompleteRegisterStep = () => {
    const { setParam } = useSearchParams()
    const [createUser, { loading }] = useMutation(CREATE_USER)
    const [sendWelcomeEmail] = useMutation(SEND_SINGLE_WELCOME_EMAIL)

    const { register, handleSubmit } = useForm<CompleteRegisterType>({
        resolver: zodResolver(CompleteRegisterSchema),
    })

    const handleFinishRegister = async (data: CompleteRegisterType) => {
        const userData = sessionStorage.getItem('@register-step-one')
        const { name, email, password } = JSON.parse(userData || '{}')

        await createUser({
            variables: {
                createUserInput: {
                    name: name.split(' ')[0],
                    surname: name.split(' ')[1],
                    email,
                    phone: data.phone,
                    document: data.cpf,
                    password,
                },
            },
        })
            .then(() => {
                setParam('step', '4')
                toast.promise(
                    sendWelcomeEmail({
                        variables: {
                            username: name,
                            email,
                        },
                    }),
                    {
                        loading: 'Enviando email de boas vindas...',
                        success: 'Email de boas vindas enviado com sucesso!',
                        error: 'Erro ao enviar email de boas vindas',
                    }
                )
            })
            .catch((error) => {
                toast.error('Erro ao finalizar cadastro')
                console.log(error)
            })
    }

    return (
        <form
            onSubmit={handleSubmit(handleFinishRegister)}
            className={cn('flex flex-col gap-6')}
        >
            <div className='flex flex-col items-center gap-2 text-center'>
                <span className='flex flex-row gap-2 text-2xl font-bold'>
                    Finalize seu cadastro
                </span>
                <p className='text-balance text-xs text-muted-foreground'>
                    Insira os dados da sua conta
                </p>
            </div>
            <RadioGroup defaultValue='card' className='grid grid-cols-3 gap-4'>
                <div>
                    <RadioGroupItem
                        value='card'
                        id='card'
                        className='peer sr-only'
                        aria-label='Card'
                    />
                    <Label
                        htmlFor='card'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='mb-3 h-6 w-6'
                        >
                            <rect width='20' height='14' x='2' y='5' rx='2' />
                            <path d='M2 10h20' />
                        </svg>
                        Cartão
                    </Label>
                </div>
                <div>
                    <RadioGroupItem
                        value='pix'
                        id='pix'
                        className='peer sr-only'
                        aria-label='Pix'
                    />
                    <Label
                        htmlFor='pix'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'
                    >
                        <svg
                            fill='#ffffff'
                            width='24px'
                            height='24px'
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mb-3 h-6 w-6'
                        >
                            <path d='M11.9 11.7a2 2 0 0 1-1.4-.6l-2.1-2.1a.4.4 0 0 0-.6 0l-2.1 2.1a2 2 0 0 1-1.4.6h-.4l2.6 2.7c.9.8 2.2.8 3 0l2.7-2.7h-.3zm-7.6-7.4c.5 0 1 .2 1.4.6l2.1 2.1c.2.2.4.2.6 0l2.1-2.1a2 2 0 0 1 1.4-.6h.3L9.5 1.6a2.1 2.1 0 0 0-3 0l-2.7 2.7h.5z' />
                            <path d='m14.4 6.5-1.6-1.6h-.9c-.4 0-.7.1-1 .4L8.8 7.4a1 1 0 0 1-1.4 0L5.3 5.3c-.3-.2-.7-.4-1-.4h-1L1.6 6.5c-.8.8-.8 2.2 0 3l1.6 1.6h1c.4 0 .8-.1 1-.4l2.1-2.1c.4-.4 1-.4 1.4 0l2.1 2.1c.3.3.7.4 1 .4h.9l1.6-1.6c.8-.8.8-2.2 0-3z' />
                        </svg>
                        PIX
                    </Label>
                </div>
                <div>
                    <RadioGroupItem
                        value='boleto'
                        id='boleto'
                        className='peer sr-only'
                        aria-label='Boleto'
                    />
                    <Label
                        htmlFor='boleto'
                        className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary '
                    >
                        <Barcode className='mb-3 h-6 w-6' />
                        Boleto
                    </Label>
                </div>
            </RadioGroup>
            <div className='grid gap-2'>
                <Label htmlFor='name'>Nome</Label>
                <Input id='name' placeholder='Nome completo' />
            </div>
            <div className='flex flex-row gap-2'>
                <div className='grid gap-2'>
                    <Input
                        id='cpf'
                        type='text'
                        placeholder='Insira seu CPF'
                        required
                        {...register('cpf')}
                    />
                </div>
                <div className='grid gap-2'>
                    <Input
                        id='phone'
                        type='text'
                        placeholder='Insira seu telefone'
                        required
                        {...register('phone')}
                    />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='grid gap-2'>
                    <Label htmlFor='month'>Mês</Label>
                    <Select>
                        <SelectTrigger id='month' aria-label='Month'>
                            <SelectValue placeholder='Mês' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='1'>Janeiro</SelectItem>
                            <SelectItem value='2'>Fevereiro</SelectItem>
                            <SelectItem value='3'>Março</SelectItem>
                            <SelectItem value='4'>Abril</SelectItem>
                            <SelectItem value='5'>Maio</SelectItem>
                            <SelectItem value='6'>Junho</SelectItem>
                            <SelectItem value='7'>Julho</SelectItem>
                            <SelectItem value='8'>Agosto</SelectItem>
                            <SelectItem value='9'>Setembro</SelectItem>
                            <SelectItem value='10'>Outubro</SelectItem>
                            <SelectItem value='11'>Novembro</SelectItem>
                            <SelectItem value='12'>Dezembro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='year'>Ano</Label>
                    <Select>
                        <SelectTrigger id='year' aria-label='Year'>
                            <SelectValue placeholder='Ano' />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 20 }, (_, i) => (
                                <SelectItem
                                    key={i}
                                    value={`${new Date().getFullYear() + i}`}
                                >
                                    {new Date().getFullYear() + i}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='grid gap-2'>
                    <Label htmlFor='cvc'>CVV</Label>
                    <Input id='cvc' placeholder='CVV' />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='grid gap-2'>
                    <Label htmlFor='code'>Código de afiliado (opcional)</Label>
                    <Input
                        id='code'
                        type='text'
                        placeholder='Insira seu código de afiliado'
                        required
                        {...register('code')}
                    />
                </div>
                {loading ? (
                    <Button disabled>
                        <Loader2 className='animate-spin' />
                        Aguarde
                    </Button>
                ) : (
                    <Button type='submit'>Finalizar cadastro</Button>
                )}
            </div>
        </form>
    )
}
