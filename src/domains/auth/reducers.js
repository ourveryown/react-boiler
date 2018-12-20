import * as authActionTypes from './types'
import { AUTH_TOKEN } from 'constants/storageTokens'

const initialState = {
  user: { token: localStorage.getItem(AUTH_TOKEN) },
  loading: false,
  data: {
    email: '',
    password: ''
  }
}

const updateObject = (oldObject, newValues) => {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN: {
      return updateObject(state, { user: action.user })
    }
    case authActionTypes.LOADING: {
      return updateObject(state, { loading: action.loading })
    }
    case authActionTypes.INPUT_CHANGED: {
      return updateObject(state, { data: { ...state.data, [action.name]: action.value } })
    }
    default:
      return state
  }
}
