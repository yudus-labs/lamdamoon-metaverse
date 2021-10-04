/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Lambomoon Metaverse`,
    siteUrl: `https://lambomoon.xyz`,
    description: `A metaverse of L.A.M.B.O Solar System`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lambomoon Metaverse`,
        short_name: `Lambomoon Metaverse`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo-short.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169204893-7",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
