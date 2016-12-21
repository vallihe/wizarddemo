import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import validate from '../../routes/Form/components/validate'
import renderField from '../../routes/Form/components/renderField'


let FormFirstPage = (props) => {

  console.log(props.flow);
  //debugger;
  const { flow, handleSubmit } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="Etunimi" />
        <Field name="lastName" type="text" component={renderField} label="Sukunimi" />
        
        { flow === "small" ? 
          <Field name="lastName" type="text" component={renderField} label="Osoite" />
           : null
        }

        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  ) 
}

/*FormFirstPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}*/

const selector = formValueSelector('Form')

FormFirstPage = connect(
  state => {
    const firstName = selector(state, 'firstName')
    const lastName = selector(state, 'lastName')
    //const {firstName, lastName} = selector(state, 'firstName', 'lastName')

    return {
      firstName,
      lastName
      //fullName: `${firstName || ''} ${lastName || ''}`     
    }
  })(FormFirstPage)


/*export default FormFirstPage */

 export default reduxForm({
  form: 'Form', //Form name is same
  renderField,
  destroyOnUnmount: false,
  validate
})(FormFirstPage)
