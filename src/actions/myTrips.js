// synchronous actions
export const setMyTrips = trips => {
  return {
    type: "SET_MY_TRIPS",
    trips
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
          dispatch(setMyTrips(response.data))
        }
      })
      .catch(console.log)
  }
}