import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import validate from './validate'
import renderField from './renderField'


let FormFirstPage = (props) => {
  const { fullName, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" type="text" component={renderField} label="First Name" />
      <Field name="lastName" type="text" component={renderField} label="Last Name" />
      <div>
        <button type="submit" className="next">Next {fullName}</button>
      </div>
    </form>
  ) 
}



const selector = formValueSelector('Form')

FormFirstPage = connect(
  state => {
    const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      fullName: `${firstName || ''} ${lastName || ''}`
    }
  })(FormFirstPage)

/*export default FormFirstPage */

 export default reduxForm({
  form: 'Form', //Form name is same
  renderField,//destroyOnUnmount: false,
  validate
})(FormFirstPage)
