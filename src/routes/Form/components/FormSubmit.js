import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Field, submit, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducer from './reducer'
import validate from './validate'
import renderField from './renderField'
import { handleForm, getForm, Form } from './Form'

const store = createStore(reducer)


let FormSubmit = (props) => {

  const { values, firstName, lastName } = props
return (
  <div>
    <p>Etunimi: { values.firstName }</p>
    <p>Sukunimi: { values.lastName }</p>
    <p>Sähköposti: { values.email }</p>
    <p>Sukupuoli: { values.sex }</p>
    <p>Syntymäaika: { values.calendar.toDateString() }</p>
  </div>
  )
}
 
/*
const FormSubmit = (props) => {
  console.log(handleForm)
  const { handleForm } = props
  return (
    <div>
      {handleForm}
    </div>
    )
}
*/
FormSubmit.propTypes = {
  //firstName: PropTypes.object,
  getForm: PropTypes.object
}

/*
const selector = formValueSelector('Form')

FormSubmit = connect(
  state => {
    const firstName = selector(state.form.form.Form, 'firstName')
    const lastName = selector(state, 'lastName')
    const email = selector(state, 'email')
    //const {firstName, lastName} = selector(state, 'firstName', 'lastName')

    return {
      firstName,
      lastName,
      email
      //fullName: `${firstName || ''} ${lastName || ''}`     
    }
  })(FormSubmit) 
  */


export default FormSubmit
/*
 export default reduxForm({
  form: 'Form', //Form name is same
  renderField,
  destroyOnUnmount: false,
  validate
})(FormSubmit)
*/