import { useTranslation } from "react-i18next";
import React from "react";

export default () => {
  const { t, i18n } = useTranslation("common");
  const links = [
    {
      id: 1,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/d-paiva/",
      icon: "linkedin",
    },
    {
      id: 2,
      title: "GitHub",
      href: "https://github.com/beckerin",
      icon: "github",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="md:mx-16 mx-4">
        <h1 className="title col-span-12 text-2xl xl:text-5xl text-center mb-16">
          {t("contact.title")}
        </h1>
        <div className="mb-16 flex justify-around">
          {links.map((link: any) => (
            <a
              key={link.id}
              href={link.href}
              className={link.size ? link.size : "md:h-32 md:w-32 h-16 w-16"}
            >
              <img
                src={"../../img/icon-" + link.icon + ".svg"}
                className="w-full h-full object-cover text-black"
                alt={"icone " + link.title}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
