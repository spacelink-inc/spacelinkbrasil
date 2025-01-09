import { gql } from '@apollo/client'

import { TypedDocumentNode } from '@apollo/client'

export const SEND_SINGLE_WELCOME_EMAIL: TypedDocumentNode<{
    username: string
    email: string
}> = gql`
    mutation SEND_SINGLE_WELCOME_EMAIL($username: String!, $email: String!) {
        sendSingleWelcomeEmail(username: $username, email: $email)
    }
`
