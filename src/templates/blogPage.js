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
        node_locale
        updatedAt(formatString: "MMM DD YYYY")
        body {
          childMarkdownRemark {
            html
            timeToRead
          }
        }
        excerpt
        hero {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        author {
          name
          slug
          avatar {
            fluid(maxWidth: 480) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        tags {
          ... on ContentfulTag {
            tagName
            slug
            image {
              fluid(maxWidth: 240) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
