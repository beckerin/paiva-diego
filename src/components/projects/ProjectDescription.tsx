import React from "react";
import Link from "../general/Link";
import ProjectBadges from "./ProjectBadges";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const { t, i18n } = useTranslation("common");
  const project = props.project;

  return (
    <div className="lateral col-span-7 px-4  max-w-5xl">
      <h3 className="title text-xl text-center mb-4 mt-6">
        {t(`projects.${project.name}.title`)}
      </h3>
      <p className="desription mb-8 text-center">
        {t(`projects.${project.name}.description`)}
      </p>
      <div className="badge">
        <h3 className="badge__title title text-xl text-center mb-4 mt-6">
          {t("projects.techs")}
        </h3>
        <div className="badge__list flex justify-center flex-wrap gap-2">
          {project.techs.map((tech: any) => (
            <ProjectBadges name={tech} key={tech} />
          ))}
        </div>
      </div>
      <div className="linkTo title mt-8 text-center">
        <Link href={project.srcLink}>{t("projects.goTo")}</Link>
      </div>
    </div>
  );
};
