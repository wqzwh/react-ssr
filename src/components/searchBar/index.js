import React from 'react'
import './index.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="bar-location">
        <div className="location-icon" />
        <div className="location-text">北京市</div>
      </div>
      <div className="search-btn">
        <p className="place-holder">烤鱼</p>
      </div>
    </div>
  )
}

export default SearchBar
