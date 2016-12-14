import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import validate from './validate'
import FormFirstPage from './FormFirstPage'
import FormSecondPage from './FormSecondPage'
import FormThirdPage from './FormThirdPage'

class Form extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <FormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

Form.propTypes = {
  fields: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

}

function mapStateToProps(state) {  
  return {
    //page: state.page,
    fields: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
}

Form = reduxForm({
    form: 'Form',
    validate
})(Form)

export default connect(mapStateToProps)(Form);  
