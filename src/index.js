import React from 'react'
import ReactDOM from 'react-dom'
import 'domains/app/styles/app.scss'
import * as serviceWorker from './serviceWorker'

// i18n
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n'

// API
import { ApolloProvider } from 'react-apollo'
import Client from 'config/api'

// REDUX
import { Provider } from 'react-redux'
import createStore from 'config/store'

// WEB APP
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const store = createStore()

const render = Component => {
  return ReactDOM.render(
    <ApolloProvider client={Client}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
