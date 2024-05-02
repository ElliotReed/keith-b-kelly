import * as React from "react"
import { Link } from "gatsby"

import { nav, active } from "./Nav.module.scss"

interface Props {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
const Nav = ({ setIsActive }: Props) => (
  <nav className={nav}>
    <ul>
      <li>
        <Link
          to="/about"
          activeClassName={active}
          onClick={() => setIsActive(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          activeClassName={active}
          onClick={() => setIsActive(false)}
        >
          Contact
        </Link>
      </li>

      <li>
        <Link
          to="/research"
          activeClassName={active}
          onClick={() => setIsActive(false)}
        >
          Research
        </Link>
      </li>
      <li>
        <Link
          to="/store"
          activeClassName={active}
          onClick={() => setIsActive(false)}
        >
          Store
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav

{/* <li>
        <Link to="/events" activeClassName={active}>
          Events
        </Link>
      </li> */}
{/* <li>
        <Link to="/listen" activeClassName={active}>
          Listen
        </Link>
      </li> */}
{/* <li>
        <Link to="/news" activeClassName={active}>
          News
        </Link>
      </li> */}