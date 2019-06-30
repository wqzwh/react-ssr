import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import StarScore from '../../components/starScore/'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderBrand(data) {
    if (data.brand_type) {
      return (
        <div className={classnames(styles['brand'], styles['brand-pin'])}>
          品牌
        </div>
      )
    } else {
      return (
        <div className={classnames(styles['brand'], styles['brand-xin'])}>
          新到
        </div>
      )
    }
  }
  renderMonthNum(data) {
    const num = data.month_sale_num

    // 大于999采用999+
    if (num > 999) {
      return '999+'
    }

    return num
  }

  renderMeituanFlag(data) {
    if (data.delivery_type) {
      return <div className={styles['item-meituan-flag']}>美团专送</div>
    }

    return null
  }

  renderOthers(data) {
    const array = data.discounts2

    return array.map((item, index) => {
      return (
        <div key={index} className={styles['other-info']}>
          <img src={item.icon_url} className={styles['other-tag']} />
          <div className={styles['other-content']}>{item.info}</div>
        </div>
      )
    })
  }
  render() {
    const { staticContext } = this.props
    const data = this.props.itemData
    return (
      <div className={classnames(styles['r-item-content'], 'scale-1px')}>
        <img className={styles['item-img']} src={data.pic_url} />
        {this.renderBrand(data)}
        <div className={styles['item-info-content']}>
          <p className={styles['item-title']}>{data.name}</p>
          <div className={classnames(styles['item-desc'], 'clearfix')}>
            <div className={styles['item-score']}>
              <StarScore
                score={data.wm_poi_score}
                staticContext={staticContext}
              />
            </div>
            <div className={styles['item-count']}>
              月售{this.renderMonthNum(data)}
            </div>
            <div className={styles['item-distance']}>&nbsp;{data.distance}</div>
            <div className={styles['item-time']}>
              {data.mt_delivery_time}&nbsp;|
            </div>
          </div>
          <div className={styles['item-price']}>
            <div className={styles['item-pre-price']}>{data.min_price_tip}</div>
            {this.renderMeituanFlag(data)}
          </div>
          <div className={styles['item-others']}>{this.renderOthers(data)}</div>
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  dispatch: PropTypes.func,
  itemData: PropTypes.object,
  staticContext: PropTypes.any
}

export default InjectionStyle(ListItem, styles)
