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
export type ContextProps = {
  menuVisible: { isVisible: boolean };
  modalVisible: { isVisible: boolean };
  darkMode: { isDark: boolean };
  switchMode: () => void;
  showFullscreenMenu: () => void;
  handleSelect: () => void;
  closeMenu: () => void;
  showMenu: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface MenuItem {
  name: string;
  link: string;
}
