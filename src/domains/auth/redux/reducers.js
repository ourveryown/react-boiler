import * as authActionTypes from './types'

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN: {
      return {
        ...state,
        user: action.user
      }
    }
    default:
      return state
  }
}
