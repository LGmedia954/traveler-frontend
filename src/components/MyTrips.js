import React from 'react'
import TripCard from './TripCard.js'
import { connect } from 'react-redux'

// Question: Does THIS COMPONENT need to know 
// about any particular piece of my Redux store?
const MyTrips = props => {
  const tripCards = props.trips.length > 0 ? 
  props.trips.map(t => <TripCard trip={t} key={t.id}/>) : null
  
  return tripCards
}


// We provide mapStateToProps to Redux, to tell Redux:
// "Would you please provide use access to your state
// so that we may pick and choose the pieces or state 
// we would like available to this component as props."

const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}

export default connect(mapStateToProps)(MyTrips)



// Answer: If I need any piece of the state, 
// or chunk of information from the state,
// then YES I need to map state to props.