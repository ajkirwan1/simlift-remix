import { createRemixI18Next } from "remix-i18next";
import Backend from "i18next-fs-backend";
import path from "path";

export const i18n = createRemixI18Next({
  detection: {
    supportedLanguages: ["en"],
    fallbackLanguage: "en",
  },
  backend: {
    loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
  },
});
