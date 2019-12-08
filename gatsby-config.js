module.exports = {
  siteMetadata: {
    title: `IMAI RISAKO`,
    titleTemplate: `%s`,
    description: `Web designer, UI designer and programming fan in Nagoya,Japan.`,
    url: `https://imairisako.com/`,
    image: `https://imairisako-com.firebaseapp.com/static/ogp.png`,
    twitterUsername: "@i_mairy",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
