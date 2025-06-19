/** @format */
import Footer from "~/components/footer";
import Header from "~/components/header";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import { useLoaderData } from "@remix-run/react";
//import { createLoader } from "~/lib/contentful.server";
//import { validateLocale } from "~/config/locales";

const container = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function About() {
  //const { content } = useLoaderData();
  const { t } = useTranslation("common");
  return (
    <>
      <div className="flex flex-col min-h-85vh items-center bg-gray-200">
        <div className="bg-sky-950 w-full">
          <Header />
        </div>
        <motion.div
          className="flex flex-col flex-1 text-center justify-center mt-10 mb-10 gap-8 px-6 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1 className="text-2xl sm:text-4xl text-center text-gray-700">
            {t("about0")}
          </motion.h1>

          <motion.p
            className="text-base-8 sm:text-lg/9 max-w-[400px] sm:max-w-[600px] px-6 text-center"
            variants={item}
          >
            {t("about1")}
          </motion.p>
          <motion.p
            className="text-base-8 sm:text-lg/9 max-w-[400px] sm:max-w-[600px] text-center border-t-2 p-6 pb-0 border-cyan-800"
            variants={item}
          >
            {t("about2")}
          </motion.p>
          <motion.p
            className="text-base-8 sm:text-lg/9 max-w-[400px] sm:max-w-[600px] text-center border-t-2 p-6 border-cyan-800"
            variants={item}
          >
            {t("about3")}
          </motion.p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
