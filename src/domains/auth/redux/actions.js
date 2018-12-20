import * as authActionTypes from './types'

export const loginAction = user => dispatch => {
  dispatch({
    type: authActionTypes.LOGIN,
    user
  })
}
