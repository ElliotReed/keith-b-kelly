import React, { useState, useEffect, useRef } from "react"
import Auth from "../../services/auth"
import ItemBlock from "../shared/ItemBlock"

const baseURL =
  process.env === "production"
    ? "https:keithbkelly.com"
    : "http://localhost:3066"

const AdminLoginPage = () => {
  const emailField = useRef(null)
  const passwordField = useRef(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await (
      await fetch(`${baseURL}/admin/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
    ).json()

    if (result.accessToken) {
      Auth.login(result.accessToken)
    }
    console.log(result)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (emailField.current) {
        //do the same for all autofilled fields
        setEmail(emailField.current.value)
        clearInterval(interval)
      }
      if (passwordField.current) {
        //do the same for all autofilled fields
        setPassword(passwordField.current.value)
        clearInterval(interval)
      }
    }, 100)
  })

  return (
    <ItemBlock>
      <h1>Admin Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>email</span>
          <input
            ref={emailField}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.email)}
            required={true}
          />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input
            ref={passwordField}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.password)}
            required={true}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </ItemBlock>
  )
}
export default AdminLoginPage
