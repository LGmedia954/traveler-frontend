import React from 'react'
import {Link} from 'react-router-dom'



const TripCard = ({ trip }) => {
  return (
    trip ?
      <div>
        <h3>{trip.attributes.name}</h3>
        <p>{trip.attributes.start_date}</p>
        <p>{trip.attributes.end_date}</p>
        <Link to={`/trips/${trip.id}/edit`}>Edit This Trip</Link>
      </div> :
      <p>This is the Trip Card with no trip!</p>
  )
}

export default TripCard