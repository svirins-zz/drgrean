import { MetaHTMLAttributes, ReactChild, ReactChildren } from "react";

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: MetaHTMLAttributes<HTMLMetaElement>[];
  title: string;
}
export type Frontmatter = {
  price: number;
  slug: string;
  tile: string;
  title: string;
};

export interface ImageProps {
  alt: string;
  url: string;
}

export interface AuxProps {
  children: ReactChild | ReactChildren;
}
