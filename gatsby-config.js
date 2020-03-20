/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Terry J Reynolds Portfolio`,
    // siteUrl: `https://www.gatsbyjs.org`,
    description: `Terry J Reynolds Portfolio`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ]
}
