import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import currentUser from './reducers/currentUser';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Login/> : <Login/>
    );

  }
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

export default connect(mapStateToProps, { getCurrentUser })(App);
