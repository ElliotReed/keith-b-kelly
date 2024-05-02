import React, { useState } from "react"

import LoadingSpinner from "../shared/LoadingSpinner"
import * as styles from "./ContactForm.module.scss"

const CONTACT_ROUTE_URL = process.env.CONTACT_ROUTE_URL;

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    setSubmitted(true)
    e.preventDefault()
    const response = await sendEmail(CONTACT_ROUTE_URL, {
      name: name,
      email: email,
      message: message,
    })

    if (response.mail === "success") {
      setSuccess(true)
    }
  }

  async function sendEmail(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data),
    })
    return await response.json()
  }

  return (
    <section className={styles.formWrapper}>
      <h1>Contact</h1>
      <hr></hr>
      {submitted && !success && (
        <>
          <div>Sending...</div>
          <LoadingSpinner />
        </>
      )}
      {submitted && success && <div>Your message has been sent!</div>}
      {!submitted && !success && (
        <>
          <p>Send me a message!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <span>Name</span>
              <input
                autoComplete="on"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                autoComplete="on"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="message">
              <span>Message</span>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </label>
            <input type="submit" value="Send Message" />
          </form>
        </>
      )}
    </section>
  )
}

export default ContactForm
