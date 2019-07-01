import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import BottomBar from '../../components/bottomBar'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { staticContext } = this.props
    staticContext && (staticContext.notFound = true)
    return (
      <Fragment>
        <div className="not-found">404页面</div>
        <BottomBar staticContext={staticContext} />
      </Fragment>
    )
  }
}

NotFound.propTypes = {
  staticContext: PropTypes.any
}

export default InjectionStyle(NotFound, styles)
