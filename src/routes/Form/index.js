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
import FormFirstPage from '../../components/Forms/FormFirstPage'
import FormSecondPage from '../../components/Forms/FormSecondPage'
import FormThirdPage from '../../components/Forms/FormThirdPage'
import FormSubmit from './components/FormSubmit'
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
  //component   : Form,
  indexRoute  : Form,
  childRoutes : [
    { path: '1', component: FormFirstPage },
    { path: '2', component: FormSecondPage },
    { path: '3', component: FormThirdPage },
    { path: '4', component: FormSubmit }
  ],
  
  getComponent (nextState, cb) {
    console.log(nextState.location.pathname)
  	require.ensure([], (require) => {
  		const Form = require('./components/Form').default
  		const reducer = combineReducers({ form: reduxFormReducer })
  		
  		injectReducer(store, {key: 'form', reducer })

  		cb(null, Form)
  		}, 'form')
  	} 	
  })
