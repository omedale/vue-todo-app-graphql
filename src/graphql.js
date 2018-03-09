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
    mutation SigninMutation($email: String!, $password: String!) {
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
export const ALL_TODOS_QUERY = gql`
    query AllTodoQuery($user_id: ID!)  {
      userTodos(user_id: $user_id) {
          id
          name
          desc
        }
    }
`

export const ADD_TODO_MUTATION = gql`
    mutation AddPostMutation($name: String!, $content: String!, $user_id: ID!) {
      createTodo(
        desc: $content
        name: $name,
        user_id: $user_id
      ) {
        id
        desc
        name
      }
    }
`
