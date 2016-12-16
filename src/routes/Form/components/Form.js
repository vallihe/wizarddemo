import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import validate from './validate'
import FormFirstPage from './FormFirstPage'
import FormSecondPage from './FormSecondPage'
import FormThirdPage from './FormThirdPage'
import FormSubmit from './FormSubmit'

class Form extends Component {

  static propTypes = {
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
      page: 1
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
    this.props.Form.form.Form.values
  }

  onSubmit() {
    console.log(this.props)
    //this.props({ firstname: Form.form.Form.values.firstName, lastname: Form.form.Form.values.lastName })
    console.log(this.props.Form.form.Form.values)

  }

  render() {
    const { onSubmit, fields, values, handleForm } = this.props
    const { page } = this.state
    console.log( handleForm)

    return (
      <div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <FormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <FormSubmit previousPage={this.previousPage} handleForm={this.handleForm} onSubmit={this.onSubmit}/>}
      </div>
    )
  }
}

Form.propTypes = {
  //fields: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

}

function mapStateToProps(state) {  
  return {
    Form: state.form,
    fields: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitSucceeded: state.submitSucceeded,

  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Form, dispatch)}
}

Form = reduxForm({
    form: 'Form',
    onSubmit(data, dispatch) {
      dispatch(reduxForm.startSubmit('Form'))
    },
    fields: [],
    validate
})(Form)

export default connect(mapStateToProps, mapDispatchToProps)(Form);  
