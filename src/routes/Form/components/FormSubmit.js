import React from 'react'
import ReactDOM from 'react-dom'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import reducer from './reducer'
import validate from './validate'
import renderField from './renderField'
import { handleForm, Form } from './Form'

//const store = ((createStore) : createStore)(reducer)

const store = createStore(reducer)

export const createForm = (store) => ({
  form: Form,
})

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

/*var handleInitialize = () => {
    const initData = {
      "firstName": this.props.firstName,
      "lastName": this.props.lastName,
      "sex": this.props.sex,
      "email": this.props.userEmail,
    };

    this.props.initialize(initData);
  }*/

/*let FormSubmit = (props) => {
  const { handleSubmit, Values} = props
  //console.log(this.props.Form.form.Form.values.firstName)
  return (
    <form onSubmit={handleSubmit}>
        <button type="submit" className="next">Submit</button>
        {handleSubmit.Values}
    </form>
  ) 
} */

const FormSubmit = (props) => {
  console.log(handleForm)
  const { handleForm } = props
  return (
    <div>
      {handleForm}
    </div>
    )
}

/*FormFirstPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}*/


/*export default FormFirstPage */

 export default reduxForm({
  form: 'Form', //Form name is same
  renderField,
  destroyOnUnmount: false,
  validate
})(FormSubmit)
