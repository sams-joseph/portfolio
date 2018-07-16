module.exports = {
  siteMetadata: {
    title: 'Joseph Sams',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark'
  ],
}
