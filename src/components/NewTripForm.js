import React from 'react';
// 1.  We first grab the action creator
import { updateNewTripForm } from '../actions/newTripForm'
import { connect } from 'react-redux'



// 3.  This means Redux gives us back a prop called updateTripForm
// which when invoked, Redux will now dispatch
const NewTripForm = ({ name, startDate, endDate, history }) => {

  // const { name, startDate, endDate } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    // 4.  This is not an invocation of just the action creator,
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateNewTripForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      // handleSubmit(formData)
    }}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="start date"
        name="startDate"
        onChange={handleChange}
        value={startDate}
      /><br/>
      <input
        placeholder="end date"
        name="endDate"
        onChange={handleChange}
        value={endDate}
      /><br/>
      <input
        type="submit"
        value={ "Create Trip" }
      />
    </form>
)};

const mapStateToProps = state => {
  const { startDate, endDate, name }= state.newTripForm
  return {
    startDate,
    endDate,
    name
  }
}

// 2.  We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateNewTripForm })(NewTripForm);