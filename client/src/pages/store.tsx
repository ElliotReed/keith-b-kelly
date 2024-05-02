import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ItemBlock from "../components/shared/ItemBlock"
import Seo from "../components/seo"

import * as style from "./store.module.scss"

const music = [
  {
    id: 1,
    imageName: "maul-of-america",
    alt: "Blue silhouette  of a man running from a bear in the parking lot in front of a mall named Maul Of America",
    artist: `Running From Bears`,
    title: `Maul of America`,
    url: "http://www.edgetonerecords.com/catalog/4181.html",
    description: `Running From Bears is an adventurous Phoenix-based jazz sextet. Formed in 2007, the group is committed to the composition and performance of original works, along with the occasional reworking of popular songs. Each player/composer has a different compositional and improvisatory voice, yielding a forward-thinking and diverse group sound. 
    
Running From Bears is in its 10th year of a residency at The Lost Leaf, a Phoenix venue dedicated to the presentation of musical ensembles that compose their own works. The group can also be seen at other Phoenix area venues and festivals, such as The Nash, The Rhythm Room, the Tempe Festival of the Arts, and the Highland/ASU Jazz Festival.`,
  },
  {
    id: 2,
    imageName: "slendor-loris",
    alt: "Ethereal abstract design in helix like shape",
    artist: `Slender Loris`,
    title: `Two Parts Helium`,
    url: "http://www.edgetonerecords.com/catalog/4177.html",
    description: `Slender Loris: A Phoenix-based improvising duo blending woodwinds and modular synth/electronics

Keith Kelly - soprano, tenor saxophones, bass clarinet, flute
Tony Orb - modular synthesizer, electronics
    `,
  },
  // {
  //   id: 3,
  //   imageURL: "https://f4.bcbits.com/img/a0509137140_16.jpg",
  //   image: "../images/store/maul-of-america.jpg",
  //   artist: `Mike Wilkinson`,
  //   title: `Wait For Me`,
  //   url: "http://www.cafecentralmadrid.com/reservas/",
  //   description: `Master Trombonist MICHAEL WILKINSON, a.k.a. Dr. Trombone, offers his debut release WAIT FOR ME! on Random Act Records. Joined by fellow Jazz educators from his native Arizona, the Wilkinsemble swings on a set of original tunes, plus songs by Charlie Parker, Oscar Pettiford and Duke Ellington. The group's imposing musicianship shines, and Wilkinson's use of varying instrumentation - various trombones and saxophones as the frontline, and an organ-based rhythm section - creates a compelling listening experience. Wilkinson's virtuosity is evident on every track, but the leader allows ample solo space for his cohorts, including renowned drummer Dom Moio, acclaimed organist Michael Kocour, multi-instrumentalist Keith Kelly and burning guitarist Jeffrey Libman. The recording also clearly illustrates the leader's compositional gifts; he composed six of the nine tracks. The tunes vary in complexity, tempo and feeling, concocting a compelling and intriguing set of swinging Jazz. Equally at home in both the classical and jazz realms, Wilkinson's debut showcases the influences of several predecessors, like J.J. Johnson, Carl Fontana, Urbie Green, Frank Rosolino and others. After years of assimilating these styles, and ultimately creating his own, the wait is now over: MICHAEL WILKINSON no longer needs to state Wait For Me!`,
  // },
]

interface StoreItemProps {
  item: {
    id: number
    imageName: string
    artist: string
    title: string
    url: string
    description: string
    alt: string
  }
}

const StoreItem = ({ item }: StoreItemProps) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const imageNode = data.allFile.nodes.find((node: { name: string }) => node.name === item.imageName)
  const image = getImage(imageNode)

  return (
    <li key={item.id} className={style.listItem}>
      <h3>{item.title}</h3>
      <p className={style.artist}>by {item.artist}</p>
      <div className={style.imageDescriptionContainer}>
        <div className={style.imageLinkContainer}>
          {image &&
            <GatsbyImage
              className={style.image}
              image={image}
              alt={item.alt}
            />
          }
          <a
            title="Links go to external site for purchase"
            href={item.url}
          >
            Purchase
          </a>
        </div>
        <p className={style.description}>{item.description}</p>
      </div>
    </li>
  )
}

export default function StorePage() {
  return (
    <>
      <Seo
        title="Store | Keith B. Kelly"
        description="Purchase the cd 'Maul of America by Running From Bears' and 'Two Parts Helium by Slender Loris'"
      />
      <ItemBlock>
        <ul className={style.productList}>
          {music.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
        </ul>
      </ItemBlock>
    </>
  )
}