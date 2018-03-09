import gql from 'graphql-tag';


export const REGISTER_MUTATION = gql`
    mutation RegisterMutation($fullname: String!, $email: String!, $password: String!) {
        createUser(
            name: $fullname,
            authProvider: {
              email: {
                email: $email,
                password: $password
              }
            }
        ) {
            id
            name
            email
        }
    }
`

export const SIGNIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      signinUser (
        email: {
         email: $email,
         password: $password
       }

       ) {
         token
         user {
           id
           name
           email
         }
       }
    }
`
