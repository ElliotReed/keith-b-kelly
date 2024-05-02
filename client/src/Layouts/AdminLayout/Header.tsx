import PropTypes from "prop-types"
import React from "react"

import Nav from "./Nav"
import Logo from "./Logo"
import * as style from "./Header.module.scss"

const Header = ({ siteTitle, isActive, setIsActive }) => {
  let hamburgerStyle = `${style.hamburger} ${style.hamburgerSqueeze} ${isActive ? style.isActive : ""
    }`

  return (
    <header className={style.header}>
      <div>
        <Logo siteTitle={siteTitle} />
        <span>Admin</span>
      </div>
      <div className={style.mainNavWrapper}>
        <Nav />
      </div>
      <button title="Show menu"
        className={hamburgerStyle}
        type="button"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={style.hamburgerBox}>
          <span className={style.hamburgerInner}></span>
        </span>
      </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
