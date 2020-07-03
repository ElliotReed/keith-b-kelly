import React from "react"

import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import ItemBlock from "../components/shared/ItemBlock"
import SEO from "../components/seo"
// import style from "./contact.module.scss"

const ContactPage = () => (
  <Layout>
    <ItemBlock>
      <SEO title="Contact" />
      <ContactForm />
    </ItemBlock>
  </Layout>
)

export default ContactPage
