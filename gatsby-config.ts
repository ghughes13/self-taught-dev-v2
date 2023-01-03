import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SelfTaughtDev`,
    siteUrl: `https://selftaught-dev.com`
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-175319701-1"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'src/images'
    },
  }]
};

export default config;
