import React from "react";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t, i18n } = useTranslation("common");
  const src = "./img/" + props.srcImage;
  const alt = t("projects.images", { name: props.name });
  return (
    <div className="imagem mt-6 col-span-5 h-96 mx-4">
      <img className="object-cover h-full w-full" src={src} alt={alt} />
    </div>
  );
};
