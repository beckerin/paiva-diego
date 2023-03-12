import React from "react";
import Project from "./Project";
import { useTranslation } from "react-i18next";

export default (props: any) => {
    const { t, i18n } = useTranslation("common");
    const projects = [
        {
            name: "Amplifica",
            srcImage: "amplifica.png",
            techs: [
                "VueJS",
                "BootStrap",
                "TypeScript",
                "HTML5",
                "CSS3",
                "GitHub",
            ],
            srcLink: "https://amplifica.eu/",
        },
        {
            name: "infocasa",
            srcImage: "infocasa.png",
            techs: [
                "C#",
                "Razor",
                "JavaScript",
                "HTML5",
                "CSS3",
                "GitHub",
            ],
            srcLink: "https://infocasa.pt/",
        },
        {
            name: "paivadiego",
            srcImage: "paivadiego.png",
            techs: [
                "React",
                "TailwindCSS",
                "TypeScript",
                "HTML5",
                "GitHub",
            ],
            srcLink: "https://paivadiego.com.br/",
        },
        {
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
                    {projects.map((project: any, index) => (
                        <Project
                            key={project.name + index}
                            project={project}
                            invert={index % 2 == 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
