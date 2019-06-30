import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { items, dispatchGetCategoryData } = this.props
    if (items.length) return
    dispatchGetCategoryData()
  }

  renderItems() {
    const { items } = this.props
    const _items = JSON.parse(JSON.stringify(items))
    return _items.splice(0, 8).map((item, index) => {
      return (
        <div key={index} className={styles['category-item']}>
          <img className={styles['item-icon']} src={item.url} />
          <p className={styles['item-name']}>{item.name}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={classnames(styles['category-content'], 'clearfix')}>
        {this.renderItems()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetCategoryData() {
    dispatch({ type: 'HOME_CATEGORY_SAGA' })
  }
})

const mapStateToProps = state => ({
  items: state.home.items
})

Category.propTypes = {
  dispatch: PropTypes.func,
  items: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InjectionStyle(Category, styles))
