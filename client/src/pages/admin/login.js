import React, { useState } from "react"

import Layout from "../../components/Layout"
import ItemBlock from "../../components/shared/ItemBlock"

const AdminLoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <Layout>
      <ItemBlock>
        <h1>Admin Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <spam>email</spam>
            <input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.email)}
              required="true"
            />
          </label>
          <label htmlFor="password">
            <span>password</span>
            <input
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.password)}
              required="true"
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </ItemBlock>
    </Layout>
  )
}
export default AdminLoginPage
