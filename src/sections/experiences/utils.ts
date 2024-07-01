import { IExperience } from "./types";

export const experiencesData: IExperience[] = [
  {
    start_at: "Feb, 2022",
    end_at: "Jul, 2022",
    company: "Techwelf | Bragança",
    title: "TechWelf Internship",
    description:
      "\tDuring my internship at TechWelf, I participated in the development of a web application called Pin2Give. This project involved the creation of an intelligent assistant that helps with congratulations or gifts on birthdays and other commemorative dates. During the internship, I acquired significant skills in ReactJS, JavaScript and CSS.\n\tMy main responsibility on the project was to provide an institutional representation of Pin2Give on the web, ensuring that the platform had a solid and professional online presence. Additionally, I supported various platform promotion strategies, collaborating with the team to implement features that would improve the user experience and increase Pin2Give's reach.",
  },
  {
    start_at: "Dec, 2022",
    end_at: "May, 2024",
    company: "CeDRI | ESTiG | IPB | Bragança",
    title: "Web Developer in CeDRI",
    description:
      "\tDuring my time at the CeDRI Research Center, I worked in the web development area, where I specialized in the use of Angular and Flask tools. My main responsibility was maintaining the center's portal, ensuring it remained functional and up to date. I worked on developing new features, fixing bugs and optimizing performance, always seeking to offer a fluid and intuitive experience to users.\n\tI was also responsible for the portal deploy process. For this, I managed the server using Nginx and Docker. These technologies allowed me to automate and simplify service management, ensuring the continuous availability and scalability of the portal. Working at CeDRI was an enriching experience, providing me with valuable skills in web systems development and administration.",
  },
];

export function formatStartEndDate(start: string, end: null | string) {
  return `${start} - ${end || "current"}`;
}
