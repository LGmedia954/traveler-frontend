import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/trips"  >My Trips</NavLink>
      <NavLink exact activeClassName="active" to="/trips/new" >New Trip</NavLink>
      { loggedIn ? <Logout/> : null }
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
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)