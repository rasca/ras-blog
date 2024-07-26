import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ras",
  EMAIL: "raskovsky@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_ART_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Iván Raskovsky's public space.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of ideas and rumblings I want to share publicly.",
};

export const ART: Metadata = {
  TITLE: "Art",
  DESCRIPTION: "Some of my art creations.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Peronal & work projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/rasca"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/raskovsky",
  }
];
