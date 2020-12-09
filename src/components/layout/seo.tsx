import "styles/body-classes.css";

import { SEO_PER_PAGE } from "const";
import { myContext } from "context";
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";

import { SeoProps } from "@types";

export const SEO = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}: SeoProps): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const context = useContext(myContext);
  const className =
    context.menuVisible?.isVisible || context.modalVisible?.isVisible
      ? "scroll-off"
      : "scroll-on";
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{ class: className }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
