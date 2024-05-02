import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Keith B Kelly`,
    description: `Saxophonist and educator Keith Kelly, a San Francisco Bay Area native, holds a BM in Performance (Saxophone) and a BM in Music Education from the Conservatory of Music at University of the Pacific, an MM in Music Education (Jazz Studies) and DMA in Music Education (Jazz Studies) from Arizona State University`,
    author: `Elliot Reed`,
    siteUrl: `https://www.keithbkelly.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "name": `Keith B Kelly's personal website`,
        "short_name": `Keith B Kelly`,
        "start_url": `/`,
        "background_color": `#222222`,
        "theme_color": `#86c3c0`,
        "display": `minimal-ui`,
        "icon": "src/images/site-icon.png"
      }
    }, "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};

export default config;
