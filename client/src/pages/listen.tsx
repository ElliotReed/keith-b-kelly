import React from "react"

import Layout from "../Layouts/DefaultLayout"
import ItemBlock from "../components/shared/ItemBlock"
import SEO from "../components/seo"
import * as style from "./listen.module.scss"

const ListenPage = () => (
  <Layout>
    <SEO title="Listen" />
    <ItemBlock>
      <div className={style.home}>
        <h1>Listen Page</h1>
        <p>This page is under construction, check back soon...</p>
      </div>
    </ItemBlock>
  </Layout>
)

export default ListenPage
