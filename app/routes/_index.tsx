/* eslint-disable @typescript-eslint/no-explicit-any */

import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "/public/projector.jpg";
import glassesImage from "/public/glasses.jpg";
import HeaderHero from "~/components/header-hero";
import Footer from "~/components/footer";
import Modal from "~/components/modal";
import { Navigation, Autoplay } from "swiper/modules";
import guarantee from "/public/blackguarantee.png";
import process from "/public/precisionenginnering.png";
import testpassed from "/public/qualityassurance.png";
import { motion } from "motion/react";
import { getAllLifts } from "api/get-all-lifts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 2.5,
    },
  },
};

const itemTop = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const containerTop = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

const containerSection2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const meta: MetaFunction = () => {
  return [{ title: "Simlift" }, { name: "description", content: "Simlift" }];
};

export async function loader() {
  return Response.json(await getAllLifts());
}

export default function Index() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState<null | string>(null);

  const handleModal = (index: any) => {
    setChosenItem(modalData[index]);
    setBackdropOpen((val) => !val);
    if (backdropOpen) {
      document.getElementById("modal-overflow")!.style.overflow = "auto";
    } else {
      document.getElementById("modal-overflow")!.style.overflow = "hidden";
    }
  };

  const data = useLoaderData<typeof loader>();

  const { t } = useTranslation("common");

  const modalData = [
    { text: t("modal1") },
    { text: t("modal2") },
    { text: t("modal3") },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div
        id="modal-overflow"
        className="snap-y snap-mandatory overflow-y-scroll h-screen"
      >
        <div className="relative w-full h-screen snap-center snap-always">
          <img
            src={heroImage}
            alt=""
            className="object-cover w-full h-screen filter brightness-[0.6]"
          />
          <motion.div
            className="absolute flex flex-col items-center w-full top-1/3 text-white text-center "
            variants={containerTop}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex flex-col gap-[7vh] items-center">
              <motion.h1
                className="text-2xl md:text-4xl w-3/4 text-center"
                variants={itemTop}
              >
                {t("title")}
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl/10 w-3/4 font-thin"
                variants={itemTop}
              >
                {t("aim1")}
                <br />
                {t("aim2")}
              </motion.p>
            </div>
          </motion.div>
        </div>
        <section className="relative w-full h-screen snap-center">
          {backdropOpen && (
            <div>
              <Modal handleModal={handleModal} chosenItem={chosenItem.text} />
            </div>
          )}
          <img
            src={glassesImage}
            alt=""
            className="object-cover w-full h-screen filter brightness-[0.6]"
          />
          <div className="absolute flex flex-col w-[90%] top-[20%] sm:top-2/4 left-2/4 -translate-x-1/2 sm:-translate-y-1/2">
            <motion.div
              className="flex flex-col items-center w-full text-white text-center mb-10"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <h1 className="text-2xl md:text-4xl mb-6 font-normal">
                {t("high")}
              </h1>
              <p className="text-lg md:text-2xl font-extralight">
                {t("producer")}
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row justify-around items-center w-full top-2/4 font-thin "
              variants={containerSection2}
              initial="hidden"
              whileInView="show"
            >
              <motion.div
                className="flex flex-col rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-16 sm:h-52 pt-2 bg-black-700 bg-opacity-80 items-center
            justify-center invert hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-6 sm:mb-0"
                variants={item}
                onClick={() => handleModal(0)}
              >
                <img alt="" src={process} className="h-7 sm:h-10 w-auto"></img>
                <p className="text-black font-normal text-sm sm:text-lg mb-2 mt-[1vh]">
                  {t("precision")}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-16 sm:h-52 pt-2 bg-black-700 bg-opacity-80 items-center
            justify-center invert hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-6 sm:mb-0"
                variants={item}
                onClick={() => handleModal(1)}
              >
                <img
                  alt=""
                  src={testpassed}
                  className="h-7 sm:h-10 w-auto"
                ></img>
                <p className="text-black font-normal weight-400 text-sm sm:text-lg mb-2 mt-[1vh]">
                  {t("assurance")}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-22 pt-8 sm:h-52 bg-black-700 bg-opacity-80 items-center
            justify-center invert hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-4 sm:mb-0"
                variants={item}
                onClick={() => handleModal(2)}
              >
                <img
                  alt=""
                  src={guarantee}
                  className="h-7 sm:h-10 w-auto"
                ></img>
                <p className="text-black font-normal text-sm sm:text-lg mb-2 mt-[1vh] p-4 pt-0">
                  {t("20 years")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="relative w-full h-screen snap-center">
          <div className="h-20v bg-gradient-to-r from-simlift-left to-simlift-right" />
          <div className="block content-center h-65v">
            {Array.isArray(data) ? (
              <Swiper
                style={{
                  "--swiper-navigation-color": "rgb(66, 66, 66)",
                  "--swiper-navigation-size": "30px",
                  "--swiper-navigation-sides-offset": "20px",
                }}
                className="h-full"
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col sm:flex-row h-full justify-center content-center sm:gap-28 text-center sm:leading-8 ">
                      <img
                        className="w-2/5 sm:w-1/6 h-auto  sm:ml-0 sm:-translate-x-0 self-center mb-4"
                        src={item.fields.image!.fields.file.url}
                        alt=""
                      ></img>
                      <div className="flex flex-col items-center justify-evenly basis-1/4">
                        <h2 className="text-2xl sm:text-3xl mt-0">
                          {item.fields.title}
                        </h2>
                        <p className="w-5/6 mt-2">{item.fields.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div>Error</div>
            )}
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}
