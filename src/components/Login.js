import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

// const Login = (props) => {
const Login = ({ loginForm, updateLoginForm }) => {
  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  return (
    <form onSubmit={undefined}>
      <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleInputChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

// this gives me an argument coming to this component that looks like this:
// {
//   username: "eddieb"
//   password: "password"
// }

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm } )(Login)