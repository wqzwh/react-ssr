import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.getInfo()
  }
  getInfo() {
    const { dispatch } = this.props
    dispatch({ type: 'GOLOBAL_SAGA' })
  }
  render() {
    const { route, currentUser } = this.props
    return <Fragment>{currentUser ? renderRoutes(route.routes) : ''}</Fragment>
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  route: PropTypes.object,
  currentUser: PropTypes.string
}

export default connect(state => {
  return {
    currentUser: state.globalData.currentUser
  }
})(App)
