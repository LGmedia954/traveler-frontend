import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyTrips from './components/MyTrips.js'
import NewTripForm from './components/NewTripForm.js';
import TripCard from './components/TripCard.js';
import MainContainer from './components/MainContainer.js'
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, trips } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/trips' component={MyTrips}/>
          <Route exact path='/trips/new' component={NewTripForm}/>
          <Route exact path='/trips/:id' render={props => {
            const trip = trips.find(trip => trip.id === props.match.params.id)
              console.log(trip)
              return <TripCard trip={trip} {...props}/>
            }
          }/>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    trips: state.myTrips
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));