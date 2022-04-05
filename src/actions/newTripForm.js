// sync actions

export const updateNewTripForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_TRIP_FORM",
    formData
  }
}

export const resetTripForm = () => {
  return {
    type: "RESET_NEW_TRIP_FORM"
  }
}