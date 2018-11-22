import { AUTH_CLIENT } from './queries'
import * as types from './resolverTypes'

export default {
  updateAuth: (_, { type, data }, { cache }) => {
    const query = AUTH_CLIENT

    // Get Previous State
    const previous = cache.readQuery({ query })

    let newData = {
      auth: previous.auth
    }

    switch (type) {
      case types.TOKEN: {
        newData = {
          auth: {
            ...newData.auth,
            user: {
              ...newData.auth.user,
              token: data
            }
          }
        }
        break
      }
      default:
        break
    }

    cache.writeQuery({ query, data: newData })

    return null
  }
}
