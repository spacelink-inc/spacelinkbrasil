import { Auth, SignInInput } from '@/graphql/graphql'
import { TypedDocumentNode, gql } from '@apollo/client'

export const SIGN_IN: TypedDocumentNode<{
   signIn: Auth
   signInInput: SignInInput
}> = gql`
   mutation SIGN_IN($signInInput: SignInInput!) {
      signIn(signInInput: $signInInput) {
         accessToken
         user {
            id
            name
            email
            phone
            document
         }
      }
   }
`
