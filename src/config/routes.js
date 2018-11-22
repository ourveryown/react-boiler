import React, { Component } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { compose, graphql } from 'react-apollo'

import { AUTH_CLIENT } from 'domains/auth/graphql/queries'
// import { Nav } from "domains/app/components";

import { Login } from './pages'

const noLoginRoutes = [{ path: '', component: Login }]
const loggedInRoutes = [{ path: '', component: Login }]

class Routes extends Component {
  render () {
    const { auth } = this.props
    const routes = auth.user.token ? loggedInRoutes : noLoginRoutes

    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} exact path={`/${route.path}`} component={route.component} />
          ))}
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default compose(
  graphql(AUTH_CLIENT, {
    props: ({ data: { auth } }) => ({
      auth
    })
  })
)(Routes)
