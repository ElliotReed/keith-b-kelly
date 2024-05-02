import React, { useState, useEffect } from "react"
// import Link from "gatsby"
import { Router } from "@reach/router"

// import Moment from "react-moment"
// import moment from "moment"

import Layout from "../Layouts/DefaultLayout"
import ItemBlock from "../components/shared/ItemBlock"
// import NewsItem from "../components/NewsItem"
import SEO from "../components/seo"
import * as style from "./news.module.scss"

const NewsCard = ({ newsItem }) => (
  <article className={style.newsCard}>
    <h2>{newsItem.title}</h2>
    <p>{newsItem.text}</p>
    <div>
      {/* <Moment format="">{newsItem.createdAt}</Moment> */}
    </div>
    {/* <Link to={`news/${newsItem.id}`}>Read More</Link> */}
  </article>
)
const NewsPage = () => {
  const [loading, setLoading] = useState(true)
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    fetch("http://localhost:3066/news", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(data => {
        setNewsItems(data)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <SEO title="News" />
      <Router basepath="/news">
        {/* <NewsItem path={`/news/${id}`} /> */}
      </Router>
      <ItemBlock>
        <div className={style.home}>
          <h1>News Page</h1>
          {loading ? (
            <div>Loading...</div>
          ) : newsItems.length < 1 ? (
            <div>No news is good news</div>
          ) : (
            newsItems
              .sort((a, b) => {
                const aDate = moment(a.date)
                const bDate = moment(b.date)
                return aDate - bDate
              })
              .map(newsItem => <NewsCard newsItem={newsItem} />)
          )}
        </div>
      </ItemBlock>
    </Layout>
  )
}
export default NewsPage
