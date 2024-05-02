import React from "react"
import PropTypes from "prop-types"

import MaxWidthContainer from "../../components/shared/MaxWidthContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import * as style from "./Footer.module.scss"

interface Props {
  siteTitle: string
}

export default function Footer({ siteTitle }: Readonly<Props>) {
  return (
    <footer className={style.footer}>
      <MaxWidthContainer>
        <div className={style.container}>
          <ul className={style.socialLinks}>
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
                <FontAwesomeIcon icon={["fab", "x-twitter"]} />
              </a>
            </li>
          </ul>
          <section className={style.attribution}>
            <div>
              © 2018 by {siteTitle}
            </div>
            <div className={style.webAuthor}>
              <cite>
                <span>Website by</span>{' '}
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
