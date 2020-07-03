import React, { useState } from "react"

import Layout from "../../components/Layout"
import ItemBlock from "../../components/shared/ItemBlock"
import MessageBlock from "../../components/shared/MessageBlock"
// import style from "./index.module.scss"

const AdminPage = () => {
  const [performanceData, setPerformanceData] = useState({})
  const [error, setError] = useState("")

  function handlePerformanceSubmit(e) {
    const fakeData = {
      date: "2021-01-08",
      time: "09:00 PM",
      title: "Another Cool Gig",
      address: "my house",
      description: "Cool gig, bro",
      url: "www.fuckit.com/puppies",
    }
    e.preventDefault()
    console.log(performanceData)
    console.log(fakeData)
    fetch("http://localhost:3066/performances", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(performanceData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message != "success") {
          setError(data.message)
          return
        }
        setPerformanceData({})
        console.log(data)
      })
  }

  const updatePerformanceFields = e => {
    setPerformanceData({
      ...performanceData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Layout>
      <h1>Admin Page</h1>
      <ItemBlock>
        <h2>Add Performance</h2>
        {error ? <MessageBlock type="error" message={error} /> : null}
        <form onSubmit={handlePerformanceSubmit}>
          <label htmlFor="date">
            <span>date</span>
            <input
              name="date"
              type="date"
              value={performanceData.date}
              onChange={updatePerformanceFields}
            />
          </label>
          <label htmlFor="time">
            <span>time</span>
            <input
              name="time"
              type="time"
              value={performanceData.time}
              onChange={updatePerformanceFields}
            />
          </label>
          <label htmlFor="title">
            <span>title</span>
            <input
              name="title"
              type="text"
              value={performanceData.title}
              onChange={updatePerformanceFields}
            />
          </label>
          <label htmlFor="address">
            <span>address</span>
            <input
              name="address"
              type="text"
              value={performanceData.address}
              onChange={updatePerformanceFields}
            />
          </label>
          <label htmlFor="description">
            <span>description</span>
            <textarea
              name="description"
              type="text"
              value={performanceData.description}
              onChange={updatePerformanceFields}
            />
          </label>
          <label htmlFor="url">
            <span>url</span>
            <input
              name="url"
              type="text"
              value={performanceData.url}
              onChange={updatePerformanceFields}
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </ItemBlock>
      <ItemBlock>
        <h2>Add Blog Post</h2>
      </ItemBlock>
      <ItemBlock>
        <h2>Add Store Item</h2>
      </ItemBlock>
      <ItemBlock>
        <h2>Add Gallery Image</h2>
      </ItemBlock>
    </Layout>
  )
}
export default AdminPage
