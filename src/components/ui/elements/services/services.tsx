import { graphql } from "gatsby";
import React from "react";
import tw from "twin.macro";

export const Services = ():JSX.Element => {
  return null;
};

// TODO: implement sorting
export const query = graphql`
{
  allContentfulService {
    nodes {
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      frontimage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`