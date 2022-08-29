import React from "react";
import Link from "../general/Link";
import { useTranslation } from "react-i18next";

export default (props: any) => {
  const item = props.item;
  const classes = props.className
    ? "navbar__item " + props.className
    : "navbar__item";

  const { t, i18n } = useTranslation("common");

  return (
    <li>
      <Link href={"#" + item.route} target="_self" className={classes}>
        {t(item.title)}
      </Link>
    </li>
  );
};
