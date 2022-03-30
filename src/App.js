import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyTrips from './components/MyTrips.js'
import MainContainer from './components/MainContainer.js'
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        <Switch>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={()=> loggedIn ? <MyTrips/> : <Home/>}/>
          <Route exact path='/trips' component={MyTrips}/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    // trips: state.myTrips
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));