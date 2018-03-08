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
