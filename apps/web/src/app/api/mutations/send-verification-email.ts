import { gql, TypedDocumentNode } from '@apollo/client'

export const CREATE_REGISTRATION_CODE: TypedDocumentNode<{
    createRegistrationCode: boolean
    email: string
}> = gql`
    mutation CREATE_REGISTRATION_CODE($email: String!) {
        createRegistrationCode(email: $email)
    }
`
