import gql from 'graphql-tag'

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export const UPDATE_AUTH = gql`
  mutation updateAuth($type: String!, $data: Data!) {
    updateAuth(type: $type, data: $data) @client
  }
`
