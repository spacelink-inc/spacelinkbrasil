import { Customer } from '@/graphql/graphql'
import { TypedDocumentNode, gql } from '@apollo/client'

export const GET_CUSTOMERS: TypedDocumentNode<{
    getCustomers: Customer[]
}> = gql`
    query GET_CUSTOMERS {
        getCustomers {
            id
            name
            email
            document
            phone
            createdAt
            updatedAt
        }
    }
`
