/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import * as style from "./Layout.module.scss"

const AdminLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteAdminTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={style.siteWrapper}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
      <MobileMenu isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout
