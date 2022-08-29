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
    {
      id: 3,
      title: "Telegram",
      href: "https://t.me/paiva97",
      icon: "telegram",
      size: "md:h-32 md:w-32 h-16 w-16 mt-1",
    },
    {
      id: 4,
      title: "Email",
      href:
        "mailto:contato@paivadiego.com.br?subject=Ol%C3%A1%20Diego%2C%20gostaria%20de%20falar%20contigo!&body=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20trabalho!!%0D%0A",
      icon: "mail",
      size: "md:h-28 md:w-28 h-14 w-14 md:mt-3 mt-2 md:ml-2 ml-1",
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
