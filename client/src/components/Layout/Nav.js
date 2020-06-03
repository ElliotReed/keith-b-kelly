import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./Nav.module.scss"

const Nav = ({ background }) => (
  <nav className={background ? style.backgroundNav : style.nav}>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Booking/Lessons</Link>
      </li>
      <li>
        <Link to="/events">Upcoming Gigs</Link>
      </li>
      <li>
        <Link to="/listen">Listen</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/research">Research/Education</Link>
      </li>
      <li>
        <Link to="/store">Purchase Music</Link>
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
