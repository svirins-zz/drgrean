require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby IAM",
    description: "Gatsby + TypeScript + Tailwind CSS + Emotion = IAM",
    author: "dr. Grean",
    siteURL: "https://addict.cf",
    lang: "ru",
    keywords: ["Addiction", "Therapy", "Recovery", "Blog"],
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-netlify",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TQ6RXGS",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "I AM",
        short_name: "I AM",
        start_url: "/",
        display: "browser",
        icon: "src/assets/favicon.svg",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              subsets: [`cyrillic-ext`],
              variants: [`400`, `500`, `700`, `800`],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: `src/@types/__generated__/gatsby-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              options: {
                maxWidth: 1024,
                linkImagesToOriginal: false,
              },
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: "#101010",
            },
          },
        ],
      },
    },
  ],
};
