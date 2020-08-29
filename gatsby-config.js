module.exports = {
  siteMetadata: {
    title: `Brittik Basu`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-theme-andy',
      options: {
        hideDoubleBrackets: true,
      },
    },
  ],
};
