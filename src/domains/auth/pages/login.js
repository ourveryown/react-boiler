import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { LOGIN } from 'domains/auth/graphql'

import { connect } from 'react-redux'
import { loginAction, loadingAction, loginInputChanged } from 'domains/auth/actions'

import { Loader } from 'components'

import { AUTH_TOKEN } from 'constants/storageTokens'

class Login extends Component {
  onChange = e => {
    this.props.loginInputChanged(e.target.name, e.target.value)
  }

  login = () => {
    const { loginMutation, loginAction, loadingAction, email, password } = this.props

    const variables = {
      email,
      password
    }

    loadingAction(true)

    loginMutation({ variables })
      .then(res => {
        loadingAction(false)
        loginAction(res.data.login)
        localStorage.setItem(AUTH_TOKEN, res.data.login.token)
      })
      .catch(() => {
        loadingAction(false)
      })
  }

  render () {
    const { loading, email, password } = this.props

    if (loading) return <Loader />

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

const mapStateToProps = state => ({
  loading: state.auth.loading,
  email: state.auth.data.email,
  password: state.auth.data.password
})

const mapDispatchToProps = dispatch => ({
  loginAction: user => dispatch(loginAction(user)),
  loadingAction: loading => dispatch(loadingAction(loading)),
  loginInputChanged: (name, value) => dispatch(loginInputChanged(name, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compose(graphql(LOGIN, { name: 'loginMutation' }))(Login))
