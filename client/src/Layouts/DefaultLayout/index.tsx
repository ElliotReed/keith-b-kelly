/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

import Header from "./Header"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"

import { siteWrapper, main } from "./Layout.module.scss"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const { title } = useSiteMetadata()

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={siteWrapper}>
      <Header
        siteTitle={title}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <MobileMenu isActive={isActive} setIsActive={setIsActive} />
      <main className={main}>{children}</main>
      <Footer siteTitle={title} />
    </div>
  )
}

export default Layout
