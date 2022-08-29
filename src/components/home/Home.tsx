import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="h-screen flex justify-center">
      <div className="w-screen">
        <img
          className="md:object-none object-cover h-full w-full opacity-30 -mt-18"
          src="./img/present-macbook.jpg"
        />
      </div>
      <div className="flex-row text-center h-full absolute mt-56">
        <h1 className="title col-span-12 text-5xl xl:text-9xl">
          {t("home.myName")}
        </h1>
        <h2 className="description col-span-12 text-2xl">
          {t("home.myTitle")}
        </h2>
      </div>
    </div>
  );
};
