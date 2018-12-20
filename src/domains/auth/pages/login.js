import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { LOGIN } from 'domains/auth/graphql'

import { connect } from 'react-redux'
import { loginAction } from 'domains/auth/redux/actions'

import { Loader } from 'components'

const mapDispatchToProps = dispatch => ({
  loginAction: user => dispatch(loginAction(user))
})

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
    const { loginMutation, loginAction } = this.props
    const { email, password } = this.state

    const variables = {
      email,
      password
    }

    this.setState({
      loading: true
    })
    loginMutation({ variables })
      .then(res => {
        this.setState({
          loading: false
        })
        loginAction(res.data.login)
      })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
  }

  render () {
    const { loading, email, password } = this.state

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

export default connect(
  null,
  mapDispatchToProps
)(compose(graphql(LOGIN, { name: 'loginMutation' }))(Login))
