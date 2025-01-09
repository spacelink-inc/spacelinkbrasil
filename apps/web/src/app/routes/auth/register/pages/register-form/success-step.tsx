import { Button } from '@/components/atoms/button'
import { CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const SuccessStep = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <CheckCircle className='h-10 w-10 text-green-500' />
            <span className='text-2xl font-bold'>
                Cadastro realizado com sucesso
            </span>
            <p className='text-center text-xs text-muted-foreground'>
                Seu cadastro foi realizado com sucesso. Agora você pode acessar
                a plataforma.
            </p>
            <Button
                type='button'
                className='w-full'
                onClick={() => navigate('/auth/login')}
            >
                Acessar plataforma
            </Button>
        </div>
    )
}
