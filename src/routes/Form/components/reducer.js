//import { combineReducers } from 'redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, actionTypes } from 'redux-form'

/*const reducer = combineReducers({
  form: formReducer
})*/
const reducers = {
	form: formReducer,
  	/*submitSucceeded: (submitSucceeded = false, action) => {
    switch (action.type) {
      case actionTypes.TOUCH: return false;
      case actionTypes.START_SUBMIT: return false;
      case actionTypes.STOP_SUBMIT: return action.errors ? false : true;
      default: return submitSucceeded;
    }
  }*/
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)


export default reducer