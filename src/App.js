import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// import { Nav } from "domains/app/components";

import { NO_LOGIN, LOGGED_IN } from 'domains/app/routes'

const mapStateToProps = state => ({
  user: state.auth.user
})

class App extends Component {
  render () {
    const { user } = this.props

    const routes = user.token ? LOGGED_IN : NO_LOGIN

    return (
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact path={`/${route.path}`} component={route.component} />
        ))}
        <Redirect to='/' />
      </Switch>
    )
  }
}

export default connect(mapStateToProps)(App)
