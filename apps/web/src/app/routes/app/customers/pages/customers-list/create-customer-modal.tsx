'use client'

import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Modal } from '@/components/atoms/modal'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { CREATE_CUSTOMER } from '@/app/api/mutations/create-customer'
import { useSearchParams } from 'react-router-dom'
import {
    CustomerSchema,
    CustomerType,
} from '../../types/create-customer-schema'

interface CreateCustomerProps {
    isOpen: boolean
    onClose: () => void
}

export const CreateCustomer = ({ isOpen, onClose }: CreateCustomerProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [createCustomer, { loading }] = useMutation(CREATE_CUSTOMER)

    const { register, handleSubmit, formState } = useForm<CustomerType>({
        resolver: zodResolver(CustomerSchema),
    })

    const handleChangeStepParams = (param: string, path: string) => {
        setSearchParams((state) => {
            state.set(param, path)
            return state
        })
    }

    const handleCreateCustomer = (data: CustomerType) => {
        createCustomer({
            variables: {
                createCustomerInput: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    document: data.document,
                },
            },
        })
            .then(() => {
                handleChangeStepParams('step', '2')
                toast.success('Usuário criado com sucesso!')
            })
            .catch((err) => {
                toast.error('Erro ao criar o usuário.')
                console.log(err.message)
            })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} width='470px'>
            <div className='flex flex-col gap-4 w-full'>
                {searchParams.get('step') !== '2' && (
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col w-full gap-2 -mt-[20px]'>
                            <Label className='text-lg font-bold col-span-2'>
                                Criar um novo usuário
                            </Label>
                        </div>
                        <div className='grid grid-cols-12 items-center justify-between gap-2'>
                            <Label
                                htmlFor='name'
                                className='font-semibold col-span-2'
                            >
                                Nome:
                            </Label>
                            <Input
                                id='name'
                                placeholder='Nome do usuário'
                                required
                                className='col-span-10'
                                {...register('name')}
                            />
                            {formState.errors.name && (
                                <span className='text-red-500 text-[12px] font-light col-span-12'>
                                    {formState.errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className='grid grid-cols-12 items-center justify-between gap-2'>
                            <Label
                                htmlFor='email'
                                className='font-semibold col-span-2'
                            >
                                Email:
                            </Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='Email do usuário'
                                required
                                className='col-span-10'
                                {...register('email')}
                            />
                            {formState.errors.email && (
                                <span className='text-red-500 text-[12px] font-light col-span-12'>
                                    {formState.errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className='grid grid-cols-12 items-center justify-between gap-2'>
                            <Label
                                htmlFor='email'
                                className='font-semibold col-span-2'
                            >
                                Telefone:
                            </Label>
                            <Input
                                id='email'
                                placeholder='Telefone do usuário'
                                required
                                className='col-span-10'
                                {...register('phone')}
                            />
                            {formState.errors.phone && (
                                <span className='text-red-500 text-[12px] font-light col-span-12'>
                                    {formState.errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div className='grid grid-cols-12 items-center justify-between gap-2'>
                            <Label
                                htmlFor='document'
                                className='font-semibold col-span-2'
                            >
                                CPF:
                            </Label>
                            <Input
                                id='document'
                                placeholder='000.000.000-00'
                                required
                                className='col-span-10'
                                {...register('document')}
                            />
                            {formState.errors.phone && (
                                <span className='text-red-500 text-[12px] font-light col-span-12'>
                                    {formState.errors.phone.message}
                                </span>
                            )}
                        </div>
                        {loading ? (
                            <Button disabled>
                                <Loader2 className='animate-spin' />
                                Aguarde
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit(handleCreateCustomer)}
                            >
                                Criar usuário
                            </Button>
                        )}
                    </div>
                )}
                {searchParams.get('step') === '2' && (
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-col w-full gap-2 -mt-[20px]'>
                            <Label className='text-lg font-bold col-span-2'>
                                Usuário adicionado com sucesso!
                            </Label>
                        </div>
                        <div>
                            <Label className='font-light col-span-2'>
                                Foi enviada uma mensagem via WhatsApp para seu
                                novo cliente com o link de cadastro. Caso o
                                mesmo não tenha recebido você enviar por outros
                                metodos.
                            </Label>
                        </div>
                        <div className='flex items-center w-full gap-2'>
                            <Button variant='secondary'>
                                Enviar via email
                            </Button>
                            <Button variant='secondary'>Enviar via SMS</Button>
                            <Button onClick={onClose}>Concluir cadastro</Button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}
