// reducer first, then add to the store, then action creator

export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_TRIPS":
      return action.trips
    default:
      return state
  }
}

