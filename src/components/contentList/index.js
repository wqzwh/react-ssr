import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../../components/listItem/'
import './index.scss'

class ContentList extends Component {
  constructor(props) {
    super(props)

    // 记录当前页码
    this.page = 0

    // 请求第一屏数据
    this.fetchData(this.page)

    // 标识页面是否可以滚动
    this.state = {
      isend: false
    }
  }

  onLoadPage() {
    this.page++
    // 最多滚动3页3次
    if (this.page > 3) {
      this.setState({
        isend: true
      })
    } else {
      this.fetchData(this.page)
    }
  }

  fetchData(page) {
    const { dispatch } = this.props
    const params = {
      page
    }
    dispatch({ type: 'GLOBAL_LIST_SAGA', params })
  }

  renderItems() {
    const { list } = this.props
    if (!list.length) return ''
    return list.map((item, index) => {
      return <ListItem key={index} itemData={item} />
    })
  }

  render() {
    const { isend } = this.state
    return (
      <div className="list-content">
        <h4 className="list-title">
          <span className="title-line" />
          <span>附近商家</span>
          <span className="title-line" />
        </h4>
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.globalData.list
})

ContentList.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.array
}

export default connect(mapStateToProps)(ContentList)
