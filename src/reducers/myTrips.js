const initialState = []

// reducer first, then add to the store, then action creator

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
    case "ADD_TRIP":
      return state.trips.concat(action.trips)
    case "CLEAR_TRIPS":
      return initialState
    default:
      return state
  }
}