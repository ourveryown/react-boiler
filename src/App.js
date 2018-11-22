import React, { Component } from 'react'

import 'domains/app/styles/app.css'

// API
import { ApolloProvider } from 'react-apollo'
import Client from 'config/api'

import Routes from 'config/routes'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={Client}>
        <Routes />
      </ApolloProvider>
    )
  }
}

export default App
