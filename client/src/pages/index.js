import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import ItemBlock from "../components/shared/ItemBlock"
import { KeithMainImage } from "../components/images"
import SEO from "../components/seo"
import style from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.mainImage}>
      <KeithMainImage />
    </div>
    {/* <div className={style.card}>
        <Link to="/about">About</Link>
      </div> */}
    <ItemBlock>
      <div className={style.home}>
        <h1>Home Page</h1>
        <p>This page is under construction, check back soon...</p>
      </div>
    </ItemBlock>
  </Layout>
)

export default IndexPage
