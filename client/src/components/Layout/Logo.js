import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import style from "./Logo.module.scss"

export default function Logo({ siteTitle }) {
  return (
    <div className={style.logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}
