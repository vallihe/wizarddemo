import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import validate from './validate'
import FormFirstPage from '../../../components/Forms/FormFirstPage'
import FormSecondPage from '../../../components/Forms/FormSecondPage'
import FormThirdPage from '../../../components/Forms/FormThirdPage'
import FormSubmit from './FormSubmit'

class Form extends Component {

  static propTypes = {
    PropTypes,
    actions: PropTypes.objectOf(PropTypes.func),
    dispatch: PropTypes.func,
    fields: PropTypes.object,
    values: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1,
      flow: [],
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  handleForm = () => {

  }
  chooseSmall = () => {
    const smallForm = { flow: 'small' }
    this.setState(smallForm)
    console.log(this.state)
  }

  onSubmit = () => {
    //console.log(this.props)
    //this.props({ firstname: Form.form.Form.values.firstName, lastname: Form.form.Form.values.lastName })
    //console.log(this.props.Form.form.Form.values)

  }

  render() {
    console.log(this.props.route)
    console.log(this.props)
    const { flow, getForm, onSubmit, fields, values, handleForm } = this.props
    const { page } = this.state
    return (
      <div>
        <p onClick={this.chooseSmall}>Suppea</p>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} flow={this.state.flow}/>}
        {page === 2 && <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} flow="medium large"/>}
        {page === 3 && <FormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage} flow="large"/>}
        {page === 4 && <FormSubmit {...getForm} previousPage={this.previousPage} handleForm={this.handleForm} />}
      </div>
    )
  }
}

Form.propTypes = {
  handleForm: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
  getForm: React.PropTypes.object,
  //flow: React.PropTypes.object,
}

const mapStateToProps = (state) => ({  
  onSubmit: PropTypes.func.isRequired,
  submitSucceeded: state.submitSucceeded,
  getForm: state.form.form.Form,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}), Form, dispatch),
    Form
})

Form = reduxForm({
    form: 'Form',
    /*onSubmit(data, dispatch) {
      dispatch(reduxForm.startSubmit('Form'))
    },*/
    //flow: {},
    onSubmit: FormSubmit,
    fields: [],
    validate
})(Form)

export default connect(mapStateToProps, mapDispatchToProps)(Form);  
