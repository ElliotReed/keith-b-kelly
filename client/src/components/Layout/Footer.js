import React from "react"
import PropTypes from "prop-types"

import MaxWidthContainer from "../shared/MaxWidthContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import style from "./Footer.module.scss"

export default function Footer({ siteTitle }) {
  return (
    <footer className={style.footer}>
      <MaxWidthContainer>
        <div className={style.container}>
          <ul className={style.socialLinks}>
            <li>
              <a href="https://www.facebook.com/keithbkelly">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </li>
            <li>
              <a href="http://www.edgetonerecords.com/keith_kelly.html">
                <FontAwesomeIcon icon={["fab", "bandcamp"]} />
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/keithbkelly">
                <FontAwesomeIcon icon={["fab", "soundcloud"]} />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/a_grand_apparatus">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/grand_apparatus">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
          </ul>
          <section className={style.attribution}>
            <div>
              © {new Date().getFullYear()} by {siteTitle}
            </div>
            <div className={style.webAuthor}>
              <cite>
                Website by
                <a href="https://www.elliotreed.net/developer"> Elliot Reed</a>
              </cite>
            </div>
          </section>
        </div>
      </MaxWidthContainer>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
