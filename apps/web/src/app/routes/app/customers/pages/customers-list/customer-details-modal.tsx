import { Modal } from '@/components/atoms/modal'
import { Label } from '@/components/atoms/label'
import { Input } from '@/components/atoms/input'
import { Button } from '@/components/atoms/button'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMER } from '@/app/api/queries/get-customer'
import { useSearchParams } from '@/hooks/use-url-params'

interface CustomerDetailsProps {
    isOpen: boolean
    onClose: () => void
    refetch: () => void
}

export function CustomerDetails({ isOpen, onClose }: CustomerDetailsProps) {
    const { getParam } = useSearchParams()

    const { data: customer } = useQuery(GET_CUSTOMER, {
        variables: {
            getCustomerId: getParam('id'),
        },
    })

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='flex flex-col w-full gap-4'>
                <div className='grid grid-cols-3 gap-2 items-center w-full'>
                    <div className='flex flex-col items-center justify-start col-span-1'>
                        <Label>
                            Status do usuário: {customer?.getCustomer.name}
                        </Label>
                    </div>
                    <div className='flex flex-col items-center justify-start col-span-1'>
                        <Input readOnly className='cursor-default' />
                    </div>
                    {/* <div className='flex flex-col items-center justify-start col-span-1'>
                  <Select>
                     <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Status' />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectLabel>Status</SelectLabel>
                           <SelectItem value='BLOCKED'>Bloqueado</SelectItem>
                           <SelectItem value='ACTIVE'>Ativo</SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div> */}
                </div>
                <div className='grid grid-cols-2 w-full gap-2'>
                    <Button variant='outline'>Cancelar</Button>
                    <Button>Alterar</Button>
                </div>
            </div>
        </Modal>
    )
}
