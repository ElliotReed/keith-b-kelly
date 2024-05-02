import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo
      title="Home | Keith B. Kelly"
      description="This is the homepage for saxophonist and music educator Keith B. Kelly"
    />
    <StaticImage
      src="../images/landing-keith.jpg"
      alt="Keith B. Kelly playing saxophone"
      layout="fullWidth"
    />
  </>
)
export default IndexPage
