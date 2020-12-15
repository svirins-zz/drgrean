import { BlogPage } from "components/templates";
import { graphql } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name
export default ({ data }) => {
  return <BlogPage data={data} />;
};

export const query = graphql`
  query($slug: String!) {
    allContentfulPost(filter: { slug: { eq: $slug } }) {
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
