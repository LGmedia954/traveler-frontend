// synchronous actions
export const setMyTrips = trips => {
  return {
    type: "SET_MY_TRIPS",
    trips
  }
}

export const clearTrips = () => {
  return {
    type: "CLEAR_TRIPS"
  }
}

export const addTrip = trip => {
  return {
    type: "ADD_TRIP",
    trip
  }
}

// async actions
export const getMyTrips = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/trips", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response.data)
          dispatch(setMyTrips(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createTrip = (tripData) => {
  return dispatch => {

    return fetch("http://localhost:3001/api/v1/trips", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: tripData
    })
    // .then(r => r.json())
    // .then(resp => {
    //   if (resp.error) {
    //     alert(resp.error)
    //   } else {
    //     dispatch(addTrip(resp.data))
    //   }
    // })
    // .catch(console.log)
    
  }
}