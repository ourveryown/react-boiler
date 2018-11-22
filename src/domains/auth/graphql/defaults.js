import { AUTH_TOKEN } from 'constants/storageTokens'

export default {
  __typename: 'auth',
  user: {
    __typename: 'user',
    token: sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN)
  }
}
