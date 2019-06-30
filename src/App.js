import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import injectionStyle from './components-hoc/injectionStyle'
import styles from './assets/css/common.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { route } = this.props
    return <Fragment>{<div>{renderRoutes(route.routes)}</div>}</Fragment>
  }
}

App.propTypes = {
  route: PropTypes.object
}

export default injectionStyle(App, styles)
