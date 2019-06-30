import React, { Component } from 'react'
import InjectionStyle from '../../components-hoc/injectionStyle'
import styles from './index.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={styles['search-bar']}>
        <div className={styles['bar-location']}>
          <div className={styles['location-icon']} />
          <div className={styles['location-text']}>北京市</div>
        </div>
        <div className={styles['search-btn']}>
          <p className={styles['place-holder']}>烤鱼</p>
        </div>
      </div>
    )
  }
}

export default InjectionStyle(SearchBar, styles)
