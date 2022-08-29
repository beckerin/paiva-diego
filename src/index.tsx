import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_pt from "./translations/pt/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    pt: {
      common: common_pt,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
