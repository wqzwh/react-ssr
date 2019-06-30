import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import './index.scss'

class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.renderItems = this.renderItems.bind(this)
  }
  changeTab(item) {
    console.log(item)
  }
  renderItems() {
    const { tabs } = this.props
    return tabs.map((item, index) => {
      const cls = item.key + ' btn-item'
      const name = item.name

      return (
        <NavLink
          key={index}
          className={cls}
          replace={true}
          to={'/' + item.key}
          activeClassName="active"
          onClick={() => this.changeTab.bind(this, item)}
        >
          <div className="tab-icon" />
          <div className="btn-name">{name}</div>
        </NavLink>
      )
    })
  }
  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>
  }
}

BottomBar.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  tabs: PropTypes.array
}

export default withRouter(
  connect(state => ({
    tabs: state.home.tabs,
    activeKey: state.home.activeKey
  }))(BottomBar)
)
