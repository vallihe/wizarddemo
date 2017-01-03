import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

import validate from './validate'
import '../../../styles/components/form.scss'
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
    label: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    console.log(props.route.childRoutes["0"].path)
    this.state = {
      page: null,
      flow: [],
    }
    this.components = [
      { pageN: 1, component: FormFirstPage, pagename: props.route.childRoutes["0"].path },
      { pageN: 2, component: FormSecondPage, pagename: props.route.childRoutes["1"].path },
      { pageN: 3, component: FormThirdPage, pagename: props.route.childRoutes["2"].path },
      { pageN: 4, component: FormSubmit, pagename: props.route.childRoutes["3"].path },
    ]
   /* this.components = [
      { page: 1, component: FormFirstPage, pagename: location.pathname + "/1" },
      { page: 2, component: FormSecondPage, pagename: location.pathname + "/2" },
      { page: 3, component: FormThirdPage, pagename: location.pathname + "/3" },
      { page: 4, component: FormSubmit, pagename: location.pathname + "/4" },
    ]
   for (let i = 1; i <= this.components.length; i++) {
      this.components[0] = 1;
      this.components[1] = 2;
      this.components[2] = 3;
      this.components[3] = 4;
    } */
    this.onSubmit = this.onSubmit.bind(this)
  }

  nextPage() {
    var page = this.state.page + 1
    //history.pushState(this.components.component, null, "/form/" + this.props.route.childRoutes[page-1].path)
    browserHistory.push("/form/" + this.props.route.childRoutes[page-1].path)
    //browserHistory.push(location.pathname)
    //console.log(location.pathname)
    this.setState({ page: page })
  }

  previousPage() {
    var page = this.state.page - 1
    //browserHistory.push(this.components[this.state.page].pagename)
    //console.log(this.state.page)
    history.pushState(null, null, "/form/" + this.props.route.childRoutes[page-1].path);
    //history.pushState(this.components.component, null, this.components[this.state.page].pagename);
    //console.log(location.pathname)
    this.setState({ page: page })
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();
    //this.goBack();
    //this.setState({ page: this.state.page })
    //this.state.page == location.pathname
    console.log("backbuttonii painettu")
    //history.go(-1)
    
    //history.back(location.pathname, [this.state.page])
    console.log(history)
    console.log(browserHistory)
    //this.forceUpdate()
  }

  componentDidMount() {
    let oldPushState = window.history.pushState
    let page = 1;
    for (var i = 0, l = this.components[i].length; i < l; i++) {
      if (this.components[i].pagename == location.pathname){
        page = i+1;
        break;
      }
    }
    this.setState({page: page});
   // window.onpopstate = this.onBackButtonEvent;
    //this.onBackButtonEvent = oldPushState;
  }

/*
 shouldComponentUpdate(nextProps, nextState) {
    window.onpopstate = this.onBackButtonEvent
    //this.state.page == nextState.page
    return true
  }
  componentDidUpdate(prevProps, prevState) {
    window.onpopstate = this.onBackButtonEvent
    return true
  } */

  handleForm = () => {

  }
  chooseSmall = () => {
    const smallForm = { flow: 'small' }
    this.setState(smallForm)
    console.log(this.state)
  }

  chooseMedium = () => {
    const mediumForm = { flow: 'medium' }
    this.setState(mediumForm)
    console.log(this.state)
  }

  chooseLarge = () => {
    const largeForm = { flow: 'large' }
    this.setState(largeForm)
    console.log(this.state)
  }

  onSubmit = () => {
    //console.log(this.props)
    //this.props({ firstname: Form.form.Form.values.firstName, lastname: Form.form.Form.values.lastName })
    //console.log(this.props.Form.form.Form.values)

  }
  /* onHashChange = () => {
    alert("UUSI URLI")
    console.log(window.location.hash)
  } */



  render() {
   //console.log(this.props.route)
    //console.log(this.props)
    const { flow, getForm, onSubmit, fields, values, handleForm } = this.props
    const { page } = this.state
    //const { components } = this
    //const { pageN } = this.components
    //console.log(this.state.page)
    /*var onHashChange;
    window.addEventListener('hashchange', onHashChange, false); */
    //const { component } = this.components
   if (location.pathname === "/form/" + this.props.route.childRoutes["0"].path) {
      //console.log("KOMPONETTI TOIMII sivu 1")
      this.state.page = 1
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["1"].path) { 
      //console.log("KOMPONETTI TOIMII sivu 2")
      this.state.page = 2
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["2"].path) { 
      //console.log("KOMPONETTI TOIMII sivu 3")
      this.state.page = 3
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["3"].path) { 
      this.state.page = 4
      //console.log("KOMPONETTI TOIMII sivu 3")
    }
    /*if (this.components[1].pageN === 2); {
      console.log("KOMPONETTI TOIMII")
      this.setState({page: 2})
    } if (this.components[2].pageN === 3); {
      console.log("KOMPONETTI TOIMII") 
      this.setState({page: 3})
    } if (this.components[3].pageN === 4); {
      console.log("KOMPONETTI TOIMII") 
      this.setState({page: 4})
    } else { goBack }
   if (this.state.page = this.components.pageN) { 
      return
    } else {
      (console.log("EI TOIMI"))
    }*/

    //console.log(location.pathname)

    window.onpopstate = (e) => {
     console.log("Lomakesivu " + this.state.page)
        if (location.pathname === "/form/" + this.props.route.childRoutes["0"].path) {
      //console.log("KOMPONETTI TOIMII sivu 1")
      this.state.page = 1
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["1"].path) { 
      //console.log("KOMPONETTI TOIMII sivu 2")
      this.state.page = 2
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["2"].path) { 
      //console.log("KOMPONETTI TOIMII sivu 3")
      this.state.page = 3
    } else if (location.pathname === "/form/" + this.props.route.childRoutes["3"].path) { 
      this.state.page = 4
      //console.log("KOMPONETTI TOIMII sivu 4")
    }
    }
    return (
      <div>
        <div className="form--link">
          <p onClick={this.chooseSmall}>Suppea</p>
          <p onClick={this.chooseMedium}>Perusmuotoinen</p>
          <p onClick={this.chooseLarge}>Laaja</p>
        </div>
        {page === 1 && <FormFirstPage {...getForm} onSubmit={this.nextPage} flow={this.state.flow}/>}
        {page === 2 && <FormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} flow={this.state.flow}/>}
        {page === 3 && <FormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage} flow={this.state.flow}/>}
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
    Form: () => { dispatch (Form(state.form.form.Form.values)) },
})

Form = reduxForm({
    form: 'Form',
    /*onSubmit(data, dispatch) {
      dispatch(reduxForm.startSubmit('Form'))
    },*/
    //flow: {},
    onSubmit: FormSubmit,
    fields: [],
    label: [],
    validate
})(Form)

export default connect(mapStateToProps, mapDispatchToProps)(Form);  
