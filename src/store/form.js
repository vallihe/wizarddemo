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
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FORM_CHANGE] : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function formReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  
  return handler ? handler(state, action) : state
}