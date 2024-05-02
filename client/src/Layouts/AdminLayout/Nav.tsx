import React from "react"
import { Link } from "gatsby"

import Auth from "../../services/auth"
import * as style from "./Nav.module.scss"

const Nav = ({ background }) => (
  <nav className={background ? style.backgroundNav : style.nav}>
    <ul>
      <li>
        <Link to="/admin/performance" activeClassName={style.active}>
          Events
        </Link>
      </li>
      <li>
        <button onClick={() => Auth.logout()}>Logout</button>
      </li>
    </ul>
  </nav>
)

export default Nav
