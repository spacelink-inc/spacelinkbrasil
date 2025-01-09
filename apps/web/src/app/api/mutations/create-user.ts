import { CreateUserInput, User } from '@/graphql/graphql'
import { TypedDocumentNode } from '@apollo/client'

import { gql } from '@apollo/client'

export const CREATE_USER: TypedDocumentNode<{
    createUser: User
    createUserInput: CreateUserInput
}> = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            id
        }
    }
`
