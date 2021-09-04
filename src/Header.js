import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <div>
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn logo"
        />

        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  )
}

export default Header
