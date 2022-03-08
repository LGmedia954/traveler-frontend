// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    // payload: user
    user
  }
}

// asynchronous actou creators
export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(credentials)
      body: JSON.stringify({username: "eddieb", password: "password"})
    })
  }
}