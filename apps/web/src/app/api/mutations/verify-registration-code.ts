import { gql } from '@apollo/client'

export const VERIFY_REGISTRATION_CODE = gql`
    mutation VerifyRegistrationCode($email: String!, $code: String!) {
        verifyRegistrationCode(email: $email, code: $code)
    }
`
