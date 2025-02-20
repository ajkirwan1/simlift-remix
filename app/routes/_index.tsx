/* eslint-disable @typescript-eslint/no-explicit-any */

import type { MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
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

const modalData = [
  "Simlift’s ceiling-mounted projectors are crafted with precision engineering, designed to deliver flawless performance in any environment. Our cutting-edge technology ensures a seamless, stable, and precise viewing experience, setting a new standard for projection solutions.",
  "We take quality assurance seriously. Each Simlift projector undergoes rigorous testing to ensure reliability, durability, and consistent performance. Our commitment to excellence means you can trust every installation for years to come.",
  "With over 20 years of manufacturing experience, Simlift has perfected the art of ceiling-mounted projectors. Our long-standing expertise guarantees that every product is built to the highest standards, ensuring both innovation and reliability in every unit.",
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
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
            className="object-cover w-full h-screen"
          />
          <motion.div
            className="absolute flex flex-col items-center w-full top-1/4 text-white text-center "
            variants={containerTop}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex flex-col gap-[10vh] items-center">
              <motion.h1
                className="text-2xl md:text-4xl w-3/4 text-center"
                variants={itemTop}
              >
                Ceiling mounted projector lifts
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl w-3/4 font-thin"
                variants={itemTop}
              >
                Our aim is to deliver top-quality products
              </motion.p>
              <motion.p
                className="text-lg md:text-2xl w-3/4 max-w-7xl font-thin"
                variants={itemTop}
              >
                From the beginning, and through the evaluation process, we make
                sure the quality is outstanding
              </motion.p>
            </div>
          </motion.div>
        </div>
        <section className="relative w-full h-screen snap-center">
          {backdropOpen && (
            <div>
              <Modal handleModal={handleModal} chosenItem={chosenItem} />
            </div>
          )}
          <img
            src={glassesImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="absolute flex flex-col w-full sm:w-2/3 top-[20%] sm:top-2/4 left-2/4 -translate-x-1/2 sm:-translate-y-1/2">
            <motion.div
              className="flex flex-col items-center w-full text-white text-center mb-4"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              <h1 className="text-2xl md:text-4xl mb-8">
                HIGH QUALITY PRODUCTS
              </h1>
              <p className="text-lg md:text-2xl font-thin">
                Simlift became the no.1 producer of ceiling mounted projector
                lifts in Poland
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row justify-around items-center w-full top-2/4 font-thin"
              variants={containerSection2}
              initial="hidden"
              whileInView="show"
            >
              <motion.div
                className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-32 sm:h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-3 sm:mb-0"
                variants={item}
                onClick={() => handleModal(0)}
              >
                <img alt="" src={process} className="h-7 sm:h-10 w-auto"></img>
                <p className="text-black text-sm sm:text-lg mb-2 mt-[1vh]">
                  Precision engineering
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-32 sm:h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center  hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-3 sm:mb-0"
                variants={item}
                onClick={() => handleModal(1)}
              >
                <img
                  alt=""
                  src={testpassed}
                  className="h-7 sm:h-10 w-auto"
                ></img>
                <p className="text-black text-sm sm:text-lg mb-2 mt-[1vh]">
                  Quality assurance
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-36 sm:w-52 h-32 sm:h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center  hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center mb-3 sm:mb-0"
                variants={item}
                onClick={() => handleModal(2)}
              >
                <img
                  alt=""
                  src={guarantee}
                  className="h-7 sm:h-10 w-auto"
                ></img>
                <p className="text-black text-sm sm:text-lg mb-2 mt-[1vh]">
                  20 years of manufacturing
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
                className="h-full sm:h-4/6"
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay
                loop={true}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col sm:flex-row h-full justify-center content-center sm:gap-28 text-center sm:leading-8">
                      <img
                        className="w-2/5 sm:w-1/6 h-auto ml-[50%] sm:ml-0 -translate-x-1/2 sm:-translate-x-0"
                        src={item.fields.image!.fields.file.url}
                        alt=""
                      ></img>
                      <div className="flex flex-col items-center justify-evenly basis-1/4">
                        <h2 className="text-2xl sm:text-3xl mt-6">{item.fields.title}</h2>
                        <p className="w-5/6 mt-2">{item.fields.description}
                        </p>
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
