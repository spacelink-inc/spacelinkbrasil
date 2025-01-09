import { Button } from '@/components/atoms/button'

export const Error404 = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='78'
                height='78'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-muted-foreground'
            >
                <circle cx='12' cy='12' r='10' />
                <path d='M8 9.05v-.1' />
                <path d='M16 9.05v-.1' />
                <path d='M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3' />
            </svg>
            <div className='flex flex-col items-center justify-center gap-2'>
                <span className='text-2xl font-bold'>
                    Página não encontrada
                </span>
                <p className='text-center text-xs text-muted-foreground'>
                    A página que você está procurando não foi encontrada.
                </p>
            </div>
            <Button>Voltar para a página inicial</Button>
        </div>
    )
}
