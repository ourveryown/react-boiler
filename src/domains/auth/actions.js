import * as authActionTypes from './types'

export const loginAction = user => dispatch => {
  dispatch({
    type: authActionTypes.LOGIN,
    user
  })
}

export const loginInputChanged = (name, value) => dispatch => {
  dispatch({
    type: authActionTypes.INPUT_CHANGED,
    name,
    value
  })
}

export const loadingAction = loading => dispatch => {
  dispatch({
    type: authActionTypes.LOADING,
    loading
  })
}
