import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import { TOKEN } from 'domains/auth/graphql/resolverTypes'
import { LOGIN, UPDATE_AUTH } from 'domains/auth/graphql/mutations'

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
    const { loginMutation, updateAuth } = this.props
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
        updateAuth({ variables: { type: TOKEN, data: data.data.login.token } })
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
  graphql(UPDATE_AUTH, { name: 'updateAuth' }),
  graphql(LOGIN, { name: 'loginMutation' })
)(Login)
