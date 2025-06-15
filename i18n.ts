/** @format */

import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: ["common"], // <-- add your namespaces here
    defaultNS: "common",
    backend: {
      loadPath: (lngs, namespaces) => {
        const lng = lngs[0].split("-")[0]; // strip region
        return `/locales/${lng}/${namespaces[0]}.json`;
      },
    },
  });

export default i18n;
