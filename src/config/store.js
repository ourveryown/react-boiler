import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'config/root-reducer'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default function configureStore (initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, crashReporter, thunk))

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('config/root-reducer', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
