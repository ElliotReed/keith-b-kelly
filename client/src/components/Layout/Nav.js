import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./Nav.module.scss"

const Nav = ({ background }) => (
  <nav className={background ? style.backgroundNav : style.nav}>
    <ul>
      <li>
        <Link to="/about" activeClassName={style.active}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName={style.active}>
          Contact
        </Link>
      </li>
      <li>
        <Link to="/events" activeClassName={style.active}>
          Events
        </Link>
      </li>
      <li>
        <Link to="/listen" activeClassName={style.active}>
          Listen
        </Link>
      </li>
      <li>
        <Link to="/news" activeClassName={style.active}>
          News
        </Link>
      </li>
      <li>
        <Link to="/research" activeClassName={style.active}>
          Research
        </Link>
      </li>
      <li>
        <Link to="/store" activeClassName={style.active}>
          Store
        </Link>
      </li>
    </ul>
  </nav>
)

Nav.propTypes = {
  background: PropTypes.bool,
}

Nav.defaultProps = {
  background: false,
}

export default Nav
