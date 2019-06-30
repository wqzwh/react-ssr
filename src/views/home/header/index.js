import React from 'react'
import SearchBar from '../../../components/searchBar'
import './index.scss'

const Header = () => {
  return (
    <div className="header">
      <SearchBar />
      <img
        className="banner-img"
        src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"
      />
    </div>
  )
}

export default Header
