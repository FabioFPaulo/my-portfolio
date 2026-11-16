import type { IItem } from "./types";

export interface INavGroup {
  id: "profile" | "path" | "engineering";
  labelKey: string;
  items: IItem[];
}

export const navGroups: INavGroup[] = [
  {
    id: "profile",
    labelKey: "nav.categories.profile",
    items: [
      {
        label: "home",
        url: "#home",
      },
      {
        label: "about me",
        url: "#about-me",
      },
    ],
  },
  {
    id: "path",
    labelKey: "nav.categories.path",
    items: [
      {
        label: "education",
        url: "#academic-education",
      },
      {
        label: "experiences",
        url: "#experiences",
      },
      {
        label: "leadership",
        url: "#leadership",
      },
    ],
  },
  {
    id: "engineering",
    labelKey: "nav.categories.engineering",
    items: [
      {
        label: "projects",
        url: "#projects",
      },
      {
        label: "skills",
        url: "#languages",
      },
      {
        label: "publications",
        url: "#publications",
      },
      {
        label: "conferences",
        url: "#conferences",
      },
      {
        label: "certifications",
        url: "#certifications",
      },
    ],
  },
];
