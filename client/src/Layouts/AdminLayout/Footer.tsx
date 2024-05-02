import React from "react"
import PropTypes from "prop-types"

import MaxWidthContainer from "../../components/shared/MaxWidthContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import * as styles from "./Footer.module.scss"

export default function Footer({ siteTitle }) {
  return (
    <footer className={styles.footer}>
      <MaxWidthContainer>
        <div className={styles.container}>
          <ul className={styles.socialLinks}>
            <li>
              <a title="Facebook" href="https://www.facebook.com/keithbkelly">
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </li>
            <li>
              <a title="Edgetone Records" href="http://www.edgetonerecords.com/keith_kelly.html">
                <FontAwesomeIcon icon={["fab", "bandcamp"]} />
              </a>
            </li>
            <li>
              <a title="Sound Cloud" href="https://soundcloud.com/keithbkelly">
                <FontAwesomeIcon icon={["fab", "soundcloud"]} />
              </a>
            </li>
            <li>
              <a title="Instagram" href="http://www.instagram.com/a_grand_apparatus">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a title="X" href="https://twitter.com/grand_apparatus">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
          </ul>
          <section className={styles.attribution}>
            <div>
              © {new Date().getFullYear()} by {siteTitle}
            </div>
            <div className={styles.webAuthor}>
              <cite>
                <span>Website by</span>
                &nbsp;
                <a href="https://www.elliotreed.net/developer">Elliot Reed</a>
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
