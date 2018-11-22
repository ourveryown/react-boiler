import gql from 'graphql-tag'

export const AUTH_CLIENT = gql`
  query {
    auth @client {
      user {
        token
      }
    }
  }
`
