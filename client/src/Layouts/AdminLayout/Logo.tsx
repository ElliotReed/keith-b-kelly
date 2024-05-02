import { Link } from "gatsby"
import React from "react"

import * as style from "./Logo.module.scss"

export default function Logo({ siteTitle }) {
  return (
    <div className={style.logo}>
      <Link to="/">{siteTitle}</Link>
    </div>
  )
}

