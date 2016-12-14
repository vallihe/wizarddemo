import { createStore, combineReducers } from 'redux'
import { injectReducer } from '../../store/reducers'
import { reducer as reduxFormReducer } from 'redux-form'
/* import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { injectReducer } from '../../store/reducers' */

import Form from './components/Form'
//import { App, Code, Markdown, Values, generateExampleBreadcrumbs } from 'redux-form-website-template'

//const dest = document.getElementById('content')
/* const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const showResults = values => 
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

let render = () => {
  const Form = require('./components/Form').default
  render(
  	<Provider store={store} />
  	) 
 } */

export default (store) => ({
  path : 'form',

  getComponent (nextState, cb) {
  	require.ensure([], (require) => {
  		const Form = require('./components/Form').default
  		const reducer = combineReducers({ form: reduxFormReducer })
  		
  		injectReducer(store, {key: 'form', reducer })

  		cb(null, Form)
  		}, 'form')
  	} 	
  })



