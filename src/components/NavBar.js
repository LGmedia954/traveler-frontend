import React from 'react'
import { connect } from 'react-redux'

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser ? <strong>Welcome, 
      {currentUser.attributes.name} from 
      {currentUser.attributes.hometown.city} </strong> : "" }
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