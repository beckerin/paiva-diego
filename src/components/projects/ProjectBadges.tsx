import React from "react";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t } = useTranslation("common");
  const techsAvailable = [
    {
      name: "MySQL",
      src:
        "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "Angular",
      src:
        "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
    },
    {
      name: "Express.js",
      src:
        "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    },
    {
      name: "Flutter",
      src:
        "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
    },
    {
      name: "JWT",
      src:
        "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    },
    {
      name: "NPM",
      src:
        "https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white",
    },
    {
      name: "NodeJS",
      src:
        "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "Quasar",
      src:
        "https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=black",
    },
    {
      name: "React",
      src:
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "React Native",
      src:
        "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "Redux",
      src:
        "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
    },
    {
      name: "React Router",
      src:
        "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
    },
    {
      name: "SASS",
      src:
        "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
    },
    {
      name: "Socket.io",
      src:
        "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
    },
    {
      name: "TailwindCSS",
      src:
        "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    },
    {
      name: "Vue.js",
      src:
        "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
    },
    {
      name: "AWS",
      src:
        "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    },
    {
      name: "Heroku",
      src:
        "https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white",
    },
    {
      name: "GoLand",
      src:
        "https://img.shields.io/badge/GoLand-0f0f0f?&style=for-the-badge&logo=goland&logoColor=white",
    },
    {
      name: "IntelliJ IDEA",
      src:
        "https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
    },
    {
      name: "Visual Studio Code",
      src:
        "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
    },
    {
      name: "Visual Studio",
      src:
        "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
    },
    {
      name: "C#",
      src:
        "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white",
    },
    {
      name: "CSS3",
      src:
        "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    },
    {
      name: "Go",
      src:
        "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    },
    {
      name: "HTML5",
      src:
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    },
    {
      name: "Java",
      src:
        "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
    },
    {
      name: "JavaScript",
      src:
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      name: "Kotlin",
      src:
        "https://img.shields.io/badge/kotlin-%230095D5.svg?style=for-the-badge&logo=kotlin&logoColor=white",
    },
    {
      name: "TypeScript",
      src:
        "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "Spotify",
      src:
        "https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white",
    },
    {
      name: "YouTube Music",
      src:
        "https://img.shields.io/badge/YouTube_Music-FF0000?style=for-the-badge&logo=youtube-music&logoColor=white",
    },
    {
      name: "Windows",
      src:
        "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
    },
    {
      name: "ESLint",
      src:
        "https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white",
    },
    {
      name: "Apache Tomcat",
      src:
        "https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black",
    },
    {
      name: "Discord",
      src:
        "https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white",
    },
    {
      name: "Git",
      src:
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    },
    {
      name: "Bitbucket",
      src:
        "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
    },
    {
      name: "GitHub",
      src:
        "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      name: "Postgres",
      src:
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      name: "MySQL",
      src:
        "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
  ];
  const selected = techsAvailable.find(
    (tech) => tech.name.toLocaleLowerCase() == props.name.toLocaleLowerCase()
  );

  return (
    <img
      src={selected ? selected.src : ""}
      alt={t("projects.badges", { badge: props.name })}
    />
  );
};
