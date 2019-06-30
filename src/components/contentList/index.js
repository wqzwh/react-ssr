import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../../components/listItem/'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class ContentList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { list, dispatchGetListData } = this.props
    if (list.length) return
    dispatchGetListData()
  }

  renderItems() {
    const { list, staticContext } = this.props
    if (!list.length) return ''
    return list.map((item, index) => {
      return (
        <ListItem staticContext={staticContext} key={index} itemData={item} />
      )
    })
  }

  render() {
    return (
      <div className={styles['list-content']}>
        <h4 className={styles['list-title']}>
          <span className={styles['title-line']} />
          <span>附近商家</span>
          <span className={styles['title-line']} />
        </h4>
        {this.renderItems()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetListData() {
    dispatch({ type: 'HOME_LIST_SAGA' })
  }
})

const mapStateToProps = state => ({
  list: state.home.list
})

ContentList.propTypes = {
  dispatch: PropTypes.func,
  getList: PropTypes.func,
  list: PropTypes.array,
  staticContext: PropTypes.any
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InjectionStyle(ContentList, styles))
