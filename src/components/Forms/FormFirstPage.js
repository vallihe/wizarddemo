import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import Calendar from 'react-widgets/lib/Calendar'
import moment from 'moment'
import 'react-widgets/lib/less/react-widgets.less'

import validate from '../../routes/Form/components/validate'
import renderField from '../../routes/Form/components/renderField'
import '../../styles/components/form.scss'

momentLocalizer(moment)
moment.locale("fi")

const FormDatepicker = (input, props) => {
  const selected = input ? new Date(input) : null
  return ( <Calendar {...input} onChange={({selected}).onChange} value={this.state} format="mmm YYY" /> ) 
}

let FormFirstPage = (props) => {

  console.log(props.flow);
  //debugger;
  const { flow, handleSubmit } = props
  return (
    <div className="form--content">
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" component={renderField} label="Etunimi" />
        <Field name="lastName" type="text" component={renderField} label="Sukunimi" />
        
        { 
          flow === "medium" ? 
          <Field name="osoite" type="text" component={renderField} label="Osoite" />
           : null
        }
        { 
          flow === "medium" ? 
          <FormDatepicker />
           : null
        }
        { 
          flow === "large" ? 
          <Calendar format="mmm YYY" />
           : null
        }

        <div className="form--button">
          <button type="submit" className="next">Seuraava</button>
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
  FormDatepicker,
  destroyOnUnmount: false,
  validate
})(FormFirstPage)
