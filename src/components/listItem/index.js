import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarScore from '../../components/starScore/'
import './index.scss'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  /**
   * 渲染是否是新到和品牌标签
   * @param {*} data
   */
  renderBrand(data) {
    if (data.brand_type) {
      return <div className="brand brand-pin">品牌</div>
    } else {
      return <div className="brand brand-xin">新到</div>
    }
  }

  /**
   *  渲染月售数量
   * @param {*} data
   */
  renderMonthNum(data) {
    const num = data.month_sale_num

    // 大于999采用999+
    if (num > 999) {
      return '999+'
    }

    return num
  }

  /**
   * 是否需要渲染美团专送tag
   * @param {*} data
   */
  renderMeituanFlag(data) {
    if (data.delivery_type) {
      return <div className="item-meituan-flag">美团专送</div>
    }

    return null
  }

  /**
   * 渲染商家活动
   * @param {*} data
   */
  renderOthers(data) {
    const array = data.discounts2

    return array.map((item, index) => {
      return (
        <div key={index} className="other-info">
          <img src={item.icon_url} className="other-tag" />
          <div className="other-content">{item.info}</div>
        </div>
      )
    })
  }
  goDetail(data) {
    window.location.href = './detail.html?id=' + data.id
  }
  render() {
    const data = this.props.itemData
    return (
      <div
        onClick={() => this.goDetail(data)}
        className="r-item-content scale-1px"
      >
        <img className="item-img" src={data.pic_url} />
        {this.renderBrand(data)}
        <div className="item-info-content">
          <p className="item-title">{data.name}</p>
          <div className="item-desc clearfix">
            <div className="item-score">
              <StarScore score={data.wm_poi_score} />
            </div>
            <div className="item-count">月售{this.renderMonthNum(data)}</div>
            <div className="item-distance">&nbsp;{data.distance}</div>
            <div className="item-time">{data.mt_delivery_time}&nbsp;|</div>
          </div>
          <div className="item-price">
            <div className="item-pre-price">{data.min_price_tip}</div>
            {this.renderMeituanFlag(data)}
          </div>
          <div className="item-others">{this.renderOthers(data)}</div>
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  dispatch: PropTypes.func,
  itemData: PropTypes.object
}

export default ListItem
