import React from "react"

import ContactForm from "../components/ContactForm"
import ItemBlock from "../components/shared/ItemBlock"
import Seo from "../components/seo"
// import  * as style from "./contact.module.scss"

const ContactPage = () => (
  <>
    <Seo
      title="Contact | Keith B. Kelly" />
    <ItemBlock>
      <ContactForm />
    </ItemBlock>
  </>
)

export default ContactPage
