import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import Calendar from 'react-widgets/lib/Calendar'
import moment from 'moment'
import 'react-widgets/lib/less/react-widgets.less'
import { browserHistory } from 'react-router'

//import FormDatepicker from '../calendar'
import validate from '../../routes/Form/components/validate'
import renderField from '../../routes/Form/components/renderField'
import '../../styles/components/form.scss'
import { getForm } from '../../routes/Form/components/Form'

const { DOM: {input} } = React

momentLocalizer(moment)
moment.locale("fi")

const FormDatepicker = ({ input: { onChange, value }, type }) => {
  //const selected = input.value ? new Date(input.value) : null
  console.log(Calendar)
  return ( <Calendar defaultValue={new Date()} type={type} onChange={onChange} value={value && new Date(value) || null } format="DD MMM YYYY" /> ) 

}

let FormFirstPage = (props, state) => {

  console.log(props.firstName);
  
  const { firstName, lastName, flow, handleSubmit, values } = props
  return (
    <div className="form--content">
      <form onSubmit={handleSubmit}>
        <Field name="firstName" type="text" placeholder={props.firstName} component={renderField} label="Etunimi" />
        <Field name="lastName" type="text" component={renderField} label="Sukunimi" />
        
        { 
          flow === "medium" ? 
          <Field name="osoite" type="text" component={renderField} label="Osoite" />
           : null
        }
        { 
          flow === "medium" ? 
          <div>
            <Field name="calendar" type="text" component={FormDatepicker} label="Kalenteri" />
            {console.log(getForm)}
            <p></p>
          </div>
           : null
          }
        { 
          flow === "large" ? 
          <Field name="calendar" type="text" component={FormDatepicker} label="Kalenteri" />
           : null
        }

        <div className="form--button">
          <button type="submit" className="next">Seuraava</button>
        </div>
      </form>
    </div>
  ) 
}

/*const mapStateToProps = (state) => ({  
  onSubmit: PropTypes.func.isRequired,
}) */

const mapDispatchToProps = (dispatch) => ({
    firstName: () => { dispatch (Form(state.form.form.Form.values.firstName)) },
    lastName: () => { dispatch (Form(state.form.form.Form.values.lastName)) }
})

const selector = formValueSelector('Form')

FormFirstPage = connect(
  state => ({ firstName: state.form.form.Form.values, lastName: state.form.form.Form.values
  }),
    //{  
    //const firstName = selector(state, 'firstName')
    //const lastName = selector(state, 'lastName')
    //const {firstName, lastName} = selector(state, 'firstName', 'lastName')

    /*return {
      firstName,
      lastName
      //fullName: `${firstName || ''} ${lastName || ''}`     
    }*/
  )(FormFirstPage)


/*export default FormFirstPage */

 export default reduxForm({
  form: 'Form', //Form name is same
  renderField,
  FormDatepicker,
  destroyOnUnmount: false,
  fields: ['firstName', 'lastName'],
  validate
}, mapDispatchToProps)(FormFirstPage)
