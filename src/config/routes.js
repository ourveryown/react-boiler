import React, { Component } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

// import { Nav } from "domains/app/components";

import { Login } from './pages'

const noLoginRoutes = [{ path: '', component: Login }]

export default class Routes extends Component {
  render () {
    const routes = noLoginRoutes

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
