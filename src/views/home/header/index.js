import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../../../components/searchBar'
import InjectionStyle from '../../../components-hoc/injectionStyle'
import styles from './index.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { staticContext } = this.props
    return (
      <div className={styles['header']}>
        <SearchBar staticContext={staticContext} />
        <img
          className={styles['banner-img']}
          src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"
        />
      </div>
    )
  }
}

Header.propTypes = {
  staticContext: PropTypes.any
}

export default InjectionStyle(Header, styles)
