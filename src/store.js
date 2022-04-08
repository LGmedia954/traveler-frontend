import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myTrips from './reducers/myTrips'
import signupForm from './reducers/signupForm'
import tripForm from './reducers/tripForm'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  currentUser,
  loginForm,
  myTrips,
  signupForm,
  tripForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store