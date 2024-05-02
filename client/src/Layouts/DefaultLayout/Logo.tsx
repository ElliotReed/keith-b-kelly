import { Link } from "gatsby"
import React from "react"

import { logo } from "./Logo.module.scss"

interface Props {
  siteTitle: string
}

export default function Logo({ siteTitle }: Readonly<Props>) {
  return (
    <Link to="/" className={logo}>{siteTitle}</Link>
  )
}

