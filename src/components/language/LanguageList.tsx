import React from "react";
import { useTranslation } from "react-i18next";
import Select, { InputAction, SingleValue } from "react-select";

export default () => {
  const { i18n } = useTranslation("common");
  const languages = [
    { value: "pt", flag: "br", label: "Portuguese" },
    { value: "en", flag: "usa", label: "English" },
  ];

  const selectLang = (newValue: SingleValue<typeof languages[0]>) => {
    i18n.changeLanguage(newValue ? newValue.value : "en");
  };

  const returnFlagFromLanguage = () => {
    return (
      languages.filter((language) => language.value == i18n.language)[0].flag ||
      languages[0].flag
    );
  };

  return (
    <div className="flex">
      <Select
        options={languages}
        defaultValue={languages[1]}
        className="md:mt-2 text-black"
        onChange={selectLang}
      />
      <img
        src={`./img/${returnFlagFromLanguage()}-flag.png`}
        className="md:h-14 h-8 ml-4 md:mt-0 mt-1"
      />
    </div>
  );
};
