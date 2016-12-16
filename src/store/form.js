// ------------------------------------
// Constants
// ------------------------------------
export const FORM_CHANGE = 'FORM_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function formChange (value) {
  return {
    type    : FORM_CHANGE,
    payload : value
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
/*
export const updateForm = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}
*/

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function formReducer (state = initialState, action) {
  return action.type === FORM_CHANGE
    ? action.payload
    : state
}