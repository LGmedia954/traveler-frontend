import React from 'react';
import TripForm from './TripForm'
import { updateTrip } from '../actions/myTrips'
import { setFormDataForEdit } from '../actions/tripForm'
import { connect } from 'react-redux'



class EditTripFormWrapper extends React.Component {

  componentDidMount(){
    this.props.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  componentDidUpdate(prevProps) {
    this.props.trip && !prevProps.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  handleSubmit = (formData) => {
    const { updateTrip, trip, history } = this.props
    updateTrip({
      ...formData,
      tripId: trip.id
    }, history)
  }
  
  render() {
    const { history, trip } = this.props
    const tripId = trip ? trip.id : null
    return <>
        <TripForm editMode handleSubmit={this.handleSubmit} />
      </>
  }
};

export default connect(null, { updateTrip, setFormDataForEdit })(EditTripFormWrapper);