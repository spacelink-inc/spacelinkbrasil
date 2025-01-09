import { useQuery } from '@apollo/client'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { Upload } from 'lucide-react'

import { Button } from '@/components/atoms/button'
import { Checkbox } from '@/components/atoms/checkbox'
import { DataTable } from '@/components/molecules/data-table'
import { TableHeader } from '@/components/organisms/table-header'
import { useSearchParams } from '@/hooks/use-url-params'

import { Customer } from '@/graphql/graphql'
import { GET_CUSTOMERS } from '@/app/api/queries/get-customers'
import { CreateCustomer } from './create-customer-modal'
import { CustomerDetails } from './customer-details-modal'

export default function CustomersPage() {
    const { getParam, setParam, deleteParam } = useSearchParams()
    const { data: customers, refetch } = useQuery(GET_CUSTOMERS)

    const handleCreateParams = () => {
        setParam('cm', 'open')
        setParam('step', '1')
    }

    const handleDeleteParams = () => {
        deleteParam('cm')
        deleteParam('step')
    }

    const containsCreateParams = getParam('cm') === 'open'
    const containsCustomerId = !!getParam('id')

    const columnHelper = createColumnHelper<Customer>()

    const columns: ColumnDef<Customer, string>[] = [
        columnHelper.accessor((row) => row.id, {
            id: 'id',
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label='Select row'
                />
            ),
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label='Select all'
                />
            ),
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.name, {
            id: 'name',
            cell: (info) => info.getValue(),
            header: 'Nome',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.email, {
            id: 'email',
            cell: (info) => info.getValue(),
            header: 'Email',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.phone, {
            id: 'phone',
            cell: (info) => info.getValue(),
            header: 'Telefone',
            enableColumnFilter: false,
        }),
        columnHelper.accessor((row) => row.id, {
            id: 'button',
            cell: (info) => (
                <div className='flex flex-row gap-2 w-full items-center justify-end'>
                    <Button
                        variant='outline'
                        onClick={() => setParam('id', info.getValue())}
                        size='icon'
                        className='w-7 h-7'
                    >
                        <Upload />
                    </Button>
                </div>
            ),
            header: '',
            enableColumnFilter: false,
        }),
    ]

    return (
        <div className='flex flex-col w-full gap-2'>
            <TableHeader handlePlusFunction={handleCreateParams} />
            <DataTable columns={columns} data={customers?.getCustomers || []} />
            <CreateCustomer
                isOpen={containsCreateParams}
                onClose={handleDeleteParams}
            />
            <CustomerDetails
                isOpen={containsCustomerId}
                onClose={() => deleteParam('id')}
                refetch={refetch}
            />
        </div>
    )
}
