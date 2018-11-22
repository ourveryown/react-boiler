import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import { LOGIN, UPDATE_AUTH } from 'domains/auth/graphql/mutations'
import { AUTH_CLIENT } from 'domains/auth/graphql/queries'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    const { loginMutation } = this.props
    const { email, password } = this.state

    const variables = {
      email,
      password
    }

    this.setState({
      loading: true
    })
    loginMutation({ variables })
      .then(data => {
        this.setState({
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div>
        <input type='text' onChange={this.onChange} value={email} name='email' />
        <input type='text' onChange={this.onChange} value={password} name='password' />
        <div className='btn btn-primary' onClick={this.login}>
          Log In!
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(AUTH_CLIENT, {
    props: ({ data: { auth } }) => ({
      auth
    })
  }),
  graphql(UPDATE_AUTH, { name: 'updateAuth' }),
  graphql(LOGIN, { name: 'loginMutation' })
)(Login)
