import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import style from "./Footer.module.scss"

export default function Footer({ siteTitle }) {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()}, {siteTitle}
      <Link to="/">Keith B Kelly</Link>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
