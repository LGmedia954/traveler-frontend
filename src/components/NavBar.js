import React from 'react'
import { connect } from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'


const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser ? <strong>Welcome, 
      {currentUser.attributes.name} from 
      {currentUser.attributes.hometown.city} </strong> : "" }
      <button> Log In </button>
      <button> Sign Up </button>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     currentUser: state
//   }
// }

// We can do this deconstruct because the incoming argument is an object, 
// state, coming from redux, and it has a property called currentUser
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)