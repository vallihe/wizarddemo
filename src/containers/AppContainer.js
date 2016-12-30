import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import Home from '../routes/Home'
import Form from '../routes/Form'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
             
        </div>
      </Provider>
    )
  }
}

export default AppContainer
