import React from "react"

import Layout from "../components/Layout"
import ItemBlock from "../components/shared/ItemBlock"
import SEO from "../components/seo"
import style from "./research.module.scss"

const ResearchCard = ({ children, title, link }) => (
  <article className={style.researchCard}>
    <ItemBlock>
      <h2>{title}</h2>
      {children}
      <a href={link} target="_blank" rel="noreferrer">
        visit article
      </a>
    </ItemBlock>
  </article>
)
const ResearchPage = () => (
  <Layout>
    <SEO title="Research" />
    <ResearchCard
      title="A New Cartography: Learning Jazz at the Dawn of the 21st Century"
      link="https://repository.asu.edu/items/17840"
    >
      <p>
        Jazz continues, into its second century, as one of the most important
        musics taught in public middle and high schools. Even so, research
        related to how students learn, especially in their earliest interactions
        with jazz culture, is limited. Weaving together interviews and
        observations of junior and senior high school jazz players and teachers,
        private studio instructors, current university students majoring in
        jazz, and university and college jazz faculty, I developed a composite
        sketch of a secondary school student learning to play jazz. Using
        arts-based educational research methods, including the use of narrative
        inquiry and literary non-fiction, the status of current jazz education
        and the experiences by novice jazz learners is explored. What emerges is
        a complex story of students and teachers negotiating the landscape of
        jazz in and out of early twenty-first century public schools.
        Suggestions for enhancing jazz experiences for all stakeholders follow,
        focusing on access and the preparation of future jazz teachers.
      </p>
    </ResearchCard>
    <ResearchCard
      title="Jazz Band Teaching Guide"
      link="http://jazzworkshopaustralia.com.au/jazz-band-teaching-guide/"
    >
      <p>
        If you are ever in a position that requires you to teach a jazz big band
        this is designed to be a first resource. Your next responsibility is to
        seek out experts and to gain all of the valuable experience you can by
        participating in jazz ensembles, workshops and clinics.
      </p>
    </ResearchCard>
  </Layout>
)

export default ResearchPage
