import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.scss'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.fetchData()
  }

  fetchData() {
    const { dispatch } = this.props
    dispatch({ type: 'HOME_CATEGORY_SAGA' })
  }
  renderItems() {
    const { items } = this.props
    // 复制数组防止引用
    const _items = JSON.parse(JSON.stringify(items))

    return _items.splice(0, 8).map((item, index) => {
      return (
        <Link key={index} to='/category'>
          <div className='category-item'>
            <img className='item-icon' src={item.url} />
            <p className='item-name'>{item.name}</p>
          </div>
        </Link>
      )
    })
  }

  render() {
    return <div className='category-content clearfix'>{this.renderItems()}</div>
  }
}

Category.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array
}

export default connect(state => ({
  items: state.home.items
}))(Category)
