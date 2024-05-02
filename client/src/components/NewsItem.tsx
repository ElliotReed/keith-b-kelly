import React, { useState, useEffect } from "react"
import Link from "gatsby"
// import Moment from "react-moment"

import ItemBlock from "./shared/ItemBlock"
import Layout from "../Layouts/DefaultLayout"
import SEO from "./seo"
import * as style from "./news-item.module.scss"

const PostDetail = props => {
  const id = props.match.params
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const loadPost = () => {
      fetch(`http://localhoast:3066/news/${id}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then(response => response.json())
        .then(data => {
          setPost(data)
          setLoading(false)
        })
    }
    loadPost()
  }, [])

  return (
    <Layout>
      <SEO title="News Item" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ItemBlock>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </ItemBlock>
      )}
    </Layout>
  )
}
