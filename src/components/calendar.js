/* 
///  * Kalenteri komponentti, ei vielä käytössä	 *	///

import React from 'react'

import { connect } from 'react-redux'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import Calendar from 'react-widgets/lib/Calendar'
import moment from 'moment'
import 'react-widgets/lib/less/react-widgets.less'

momentLocalizer(moment)
moment.locale("fi")

var FormDatepicker = React.createClass({

  getInitialState() {
    return { value0: new Date() };
  },

  render() {
    var change = (name, value) => this.setState({
        ['value' + name]: value
      });
    const { input, label, type, value, meta: { touched, error } } = this.props
    return (
      <Calendar
      	{...input} defaultValue={new Date()} 
        value={this.state.value0}
        onChange={change.bind(null, '0')}/>
    )
  }
});

export default FormDatepicker */