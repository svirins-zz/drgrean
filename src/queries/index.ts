import { graphql } from "gatsby";

const ALL_AUTHORS_DETAILED = graphql`
  query AllAuthors {
    allContentfulAuthor {
      nodes {
        name
        slug
        id
        social
        avatar {
          fluid(maxWidth: 800, toFormat: WEBP) {
            src
          }
        }
        personal_info {
        childMarkdownRemark {
          html
        }
        post {
          slug
          title
          body {
            id
          }
          excerpt
          tags {
            slug
            
            tagName
            image {
              fluid(toFormat: WEBP, maxWidth: 1024) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
const ALL_POSTS_DETAILED = graphql`
  query AllPosts {
    allContentfulPost {
      nodes {
        title
        slug
        id
        node_locale
        body {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
        excerpt
        hero {
          fluid(toFormat: WEBP, maxWidth: 1024) {
            src
          }
        }
        author {
          id
          name
          avatar {
            fluid(toFormat: WEBP, maxWidth: 240) {
              src
            }
          }
        }
        updatedAt(formatString: "DDMMYY")
        tags {
          tagName
          slug
        }
      }
    }
  }
`;
const ALL_TAGS_DETAILED = graphql`
  query AllTags {
    allContentfulTag(sort: { fields: tagName }) {
      distinct(field: tagName)
      nodes {
        tagName
        slug
        id
        image {
          fluid(toFormat: WEBP, maxWidth: 640) {
            src
          }
        }
        post {
          slug
        }
      }
    }
  }
`;

export const Queries = {
  ALL_AUTHORS_DETAILED,
  ALL_POSTS_DETAILED,
  ALL_TAGS_DETAILED,
};
