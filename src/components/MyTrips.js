import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Question: Does THIS COMPONENT need to know 
// about any particular piece of my Redux store?
const MyTrips = props => {
  const tripCards = props.trips.length > 0 ? 
  props.trips.map(t => (<p key={t.id}><Link to={`/trips/${t.id}`}>{t.attributes.name}</Link></p>)) :
  null
  
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