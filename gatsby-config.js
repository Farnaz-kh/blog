/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: "Modern Gatsby blog"
  },

  plugins: [
     /*
    * Gatsby's data processing layer begins with “source”
    * plugins. Here the site sources its data from Wordpress.
    */
     {
      resolve: "gatsby-source-wordpress",
      options: {

        url: "http://ba6q00r.myraidbox.de/graphql",
        
      },
    },
  ],
}
