import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="flex justify-center">
      <div className="w-screen h-128">
        <img
          className="object-none h-full w-full opacity-30 -mt-18"
          src="./img/pattern-small-plastic.jpg"
        />
      </div>
      <div className="absolute md:mx-16 mx-4 pt-16">
        <h1 className="title col-span-12 text-2xl xl:text-5xl text-center mb-16">
          {t("about.title")}
        </h1>
        <h2 className="description md:text-xl max-w-5xl text-justify mb-16">
          {t("about.description", {
            years: new Date().getFullYear() - 1997,
          })}
        </h2>
      </div>
    </div>
  );
};
