import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import style from "./about.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <section className={style.about}>
      <h1>About Keith B Kelly</h1>
      <article>
        <p>
          Saxophonist and educator Keith Kelly, a San Francisco Bay Area native,
          holds a BM in Performance (Saxophone) and a BM in Music Education from
          the Conservatory of Music at University of the Pacific, an MM in Music
          Education (Jazz Studies) and DMA in Music Education (Jazz Studies)
          from Arizona State University. Currently, he is the Coordinator of
          Music Humanities and Performance at Paradise Valley Community College.
        </p>
        <p>
          As a woodwind specialist, he has toured with the Eels, Darlene Love,
          The Scorpion Decides, Under The Streetlamp, and his own free-jazz
          group, Ask Not. Kelly has performed with a wide variety of musical
          ensembles including: Crossing 32nd St, CONDER/dance company, Boxhead
          Ensemble,The Stan Kenton Legacy Orchestra, Phoenix Symphony, Natalie
          Cole, Maynard Ferguson, The Temptations, Glen Campbell, Diana Schuur,
          and numerous tv/radio/music personalities. Kelly has performed in or
          supervised over 35 different musical theater productions throughout
          Northern California and the greater Southwest, including "The
          Unfortunates" - which debuted at ACT's The Strand Theater in San
          Francisco in 2016, with his original horn arrangements.
        </p>
        <p>
          As a recording artist, he can be heard on records by: Eels, Califone,
          Dispatch, The Scorpion Decides, Static Announcements, Max Knouse,
          Casey Hurt, Sweetbleeders, and CooBeeCoo. Edgetone Records releases
          many of Kelly's instrumental/jazz/improvised recordings, including the
          groups: Ask Not, Running From Bears, and Slender Loris.
        </p>
        <p>
          As a researcher, his focus is on creativity/improvisation, jazz
          ensemble and improvisation pedagogy, jazz education in undergraduate
          teacher preparation programs, gender and music participation, and the
          early history of public school jazz education. He has presented
          research and/or clinics at conferences for: CMEA, AzMEA, NIME, and
          JEN. He continues to act as a PhD dissertation supervisor for Boston
          University.
        </p>
        <p>
          As a collegiate music educator, he has taught undergraduate and
          graduate courses at San Joaquin Delta College, University of the
          Pacific, Boston University (Online), Arizona State University, and was
          Assistant Professor/Coordinator of Jazz Studies at California State
          University, Stanislaus.
        </p>
        <p>Dr. Keith Kelly is an Andreas Eastman Saxophone Artist/Endorser.</p>
      </article>
    </section>
  </Layout>
)

export default AboutPage
