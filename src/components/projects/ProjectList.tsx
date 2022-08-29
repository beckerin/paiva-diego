import React from "react";
import Project from "./Project";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t, i18n } = useTranslation("common");
  const projects = [
    {
      id: 1,
      name: "ndapp",
      srcImage: "ndapp.png",
      techs: [
        "Vue.JS",
        "TypeScript",
        "TailwindCSS",
        "Kotlin",
        "MySQL",
        "Git",
        "GitHub",
      ],
      srcLink: "https://ndapp.org/",
    },
    {
      id: 2,
      name: "sharity",
      srcImage: "sharity.png",
      techs: [
        "Vue.JS",
        "TypeScript",
        "TailwindCSS",
        "Kotlin",
        "MySQL",
        "Git",
        "BitBucket",
      ],
      srcLink: "https://sharity.com.br/",
    },
    {
      id: 3,
      name: "itrack",
      srcImage: "itrack.png",
      techs: [
        "Vue.JS",
        "JavaScript",
        "TailwindCSS",
        "Kotlin",
        "MySQL",
        "Git",
        "BitBucket",
        "IntelliJ IDEA",
      ],
      srcLink: "https://itrackbrasil.com.br/",
    },
    {
      id: 4,
      name: "eucatur",
      srcImage: "eucatur.png",
      techs: [
        "Vue.JS",
        "JavaScript",
        "CSS3",
        "Go",
        "Postgres",
        "Git",
        "GitHub",
        "Visual Studio Code",
        "GoLand",
      ],
      srcLink: "https://www.eucatur.com.br/",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="md:mx-16 mx-4">
        <h1 className="title col-span-12 text-2xl xl:text-5xl text-center mb-16">
          {t("projects.title")}
        </h1>
        <div className="projetoList">
          {projects.map((project: any) => (
            <Project
              key={project.id}
              project={project}
              invert={project.id % 2 == 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
