import { gql, TypedDocumentNode } from '@apollo/client'

export const SEND_WELCOME_EMAIL: TypedDocumentNode<{
    sendValidationEmail: boolean
    username: string
    invitedByUsername: string
    invitedByEmail: string
    inviteLink: string
}> = gql`
    mutation SEND_WELCOME_EMAIL(
        $username: String!
        $invitedByUsername: String!
        $invitedByEmail: String!
        $inviteLink: String!
    ) {
        sendWelcomeEmail(
            username: $username
            invitedByUsername: $invitedByUsername
            invitedByEmail: $invitedByEmail
            inviteLink: $inviteLink
        )
    }
`
