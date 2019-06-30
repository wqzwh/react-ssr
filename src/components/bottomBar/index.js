import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.renderItems = this.renderItems.bind(this)
  }
  renderItems() {
    const { tabs, activeKey } = this.props
    return tabs.map((item, index) => {
      const cls = classnames(
        styles[item.key],
        styles['btn-item'],
        item.key === activeKey && styles['active']
      )
      const name = item.name

      return (
        <div key={index} className={cls}>
          <div className={styles['tab-icon']} />
          <div className={styles['btn-name']}>{name}</div>
        </div>
      )
    })
  }
  render() {
    return <div className={styles['bottom-bar']}>{this.renderItems()}</div>
  }
}

const mapStateToProps = state => ({
  tabs: state.home.tabs,
  activeKey: state.home.activeKey
})

BottomBar.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  tabs: PropTypes.array,
  staticContext: PropTypes.any
}

export default withRouter(
  connect(mapStateToProps)(InjectionStyle(BottomBar, styles))
)
