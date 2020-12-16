exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.node = {
    fs: "empty",
  };
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPage = require.resolve(`./src/templates/blogPage.js`);
  const authorPage = require.resolve(`./src/templates/authorPage.js`);
  // TODO: implement blog list and authors list creation
  // const authorList = require.resolve(`./src/templates/authorList.js`);
  // const blogList = require.resolve(`./src/templates/blogList.js`);

  const posts = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  const authors = await graphql(`
    {
      allContentfulAuthor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (posts.errors || authors.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // create blog pages
  posts.data.allContentfulPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPage,
      context: {
        // additional data can be passed via context
        slug: node.slug,
      },
    });
  });

  // create author pages
  authors.data.allContentfulAuthor.edges.forEach(({ node }) => {
    createPage({
      path: `/authors/${node.slug}`,
      component: authorPage,
      context: {
        // additional data can be passed via context
        slug: node.slug,
      },
    });
  });
};
