import React, { Component } from 'react'

// API
import { ApolloProvider } from 'react-apollo'
import Client from 'config/api'

// REDUX
import { Provider } from 'react-redux'
import createStore from 'config/store'

// WEB APP
import Routes from 'config/router'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={Client}>
        <Provider store={createStore()}>
          <Routes />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App
