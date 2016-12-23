import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from '../../routes/Form/components/validate'
import renderField from '../../routes/Form/components/renderField'
import renderSelect from '../../routes/Form/components/renderSelect'
import '../../styles/components/form.scss'


const {DOM: { input, email }} = React

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const FormSecondPage = (props, values, value, state) => {
  const { flow, handleSubmit, previousPage, handleChange } = props
  return (
    <div className="form--content">
      <form onSubmit={handleSubmit}>
        <Field name="email" type="email" component={renderField} label="Email"/>
        <div>  
          <div className="form--label form--left">
            <label>Sukupuoli</label>
          </div>  
          <div className="form--input">
            <label className="form--radiobutton">
              <Field name="sex" component="input" type="radio" value="male" checked={values.sex === 'male'} onChange={handleChange} />
            <p className="form--radiobuttonlabel">Mies</p>
            </label>
            <label className="form--radiobutton">
              <Field name="sex" component="input" type="radio" value="female" checked={values.sex === 'female'} onChange={handleChange} /> 
            <p className="form--radiobuttonlabel">Nainen</p>
            </label>
            <Field name="sex" component={renderError}/>
          </div>
        </div>
        { flow === "medium" ? 
            <Field name="lastName" type="text" component={renderField} label="Osoite" />
             : null
          }
        <div className="form--button">
          <button type="button" className="previous" onClick={previousPage}>Edellinen</button>
          <button type="submit" className="next">Seuraava</button>
        </div>
      </form>
    </div>
  )
}
export default reduxForm({
  form: 'Form', //Form name is same
  destroyOnUnmount: false,
  renderField,
  validate
})(FormSecondPage)
