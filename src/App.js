import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyTrips from './components/MyTrips.js'
import MainContainer from './components/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    
    return (
      <div className="App">
        <Logout/>
        <NavBar/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/trips' component={MyTrips}/>
      </div>
    );

  }
}



export default connect(null, { getCurrentUser })(App);
