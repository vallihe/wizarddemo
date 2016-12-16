import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import renderSelect from './renderSelect'


const {DOM: { input, email }} = React

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const FormSecondPage = (props, values, value, state) => {
  const { handleSubmit, previousPage, handleChange } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email"/>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name="sex" component="input" type="radio" value="male" checked={props.value === 'male'} onChange={handleChange} /> Male</label>
          <label><Field name="sex" component="input" type="radio" value="female" checked={props.value === 'female'} onChange={handleChange} /> Female</label>
          <Field name="sex" component={renderError}/>
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'Form', //Form name is same
  destroyOnUnmount: false,
  renderField,
  validate
})(FormSecondPage)
