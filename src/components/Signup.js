import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
// import { signup } from "../actions/currentUser.js"

const Signup = ({ signupFormData, updateSignupForm }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // signup(signupFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupFormData.name} 
      name="name" type="text" onChange={handleInputChange} />
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input placeholder="city" value={signupFormData.hometown.city} name="city" type="text" onChange={handleInputChange} />
      <input placeholder="state" value={signupFormData.hometown.state} name="state" type="text" onChange={handleInputChange} />
      <input placeholder="country" value={signupFormData.hometown.country} name="country" type="text" onChange={handleInputChange} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

// this gives me an argument coming to this component that looks like this:
// {
//   username: "eddieb",
//   password: "password"
// }

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm } )(Signup)