/** @format */

import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import heroImage from "/public/ceiling.jpg";
import glassesImage from "/public/glasses.jpg";
import HeaderHero from "~/components/header-hero";
import Footer from "~/components/footer";
import Modal from "~/components/modal";
import { Navigation, Autoplay } from "swiper/modules";
import guarantee from "/public/blackguarantee.png";
import process from "/public/precisionenginnering.png";
import testpassed from "/public/qualityassurance.png";
import liftS from "/public/products/SIMLIFT_S_small.jpg";
import liftM from "/public/products/Simlift_M_small.jpg";
import liftFlap from "/public/products/SimliftS_FLAP_small.jpg";
import liftKlap from "/public/products/Simlift_S_z_klapą_small.jpg";
import liftXL from "/public/products/SIMLIFT_XL_PRO_small.jpg";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
// import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";

const container = {
  hidden: { opacity: 0, },
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
      // delayChildren: 0.1,
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
      // delayChildren: 0.1,
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

export default function Index() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);

  const handleModal = (index) => {
    setChosenItem(modalData[index]);
    setBackdropOpen((val) => !val);
    if (backdropOpen) {
      document.getElementById("modal-overflow").style.overflow = "auto"
    
    } else {
      document.getElementById("modal-overflow").style.overflow = "hidden"

    }
  };

  return (
    <>
      <div className="fixed top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div id="modal-overflow" className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="relative w-full h-screen snap-center snap-always">
          <img
            src={heroImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <motion.div
            className="absolute flex flex-col items-center w-full top-[30vh] text-white text-center "
            variants={containerTop}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex flex-col gap-[10vh]">
              <motion.h1 className="text-4xl" variants={itemTop}>
                Ceiling mounted projector lifts
              </motion.h1>
              <motion.p className="text-2xl font-thin" variants={itemTop}>Our aim is to deliver top-quality products</motion.p>
              <motion.p className="text-2xl max-w-7xl font-thin" variants={itemTop}>
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
          <motion.div
            className="absolute flex flex-col items-center w-full  top-1/4  text-white text-center"
            variants={container}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="text-4xl mb-8">HIGH QUALITY PRODUCTS</h1>
            <p className="text-2xl font-thin">
              Simlift became the no.1 producer of ceiling mounted projector
              lifts in Poland
            </p>
          </motion.div>
          <motion.div
            className="flex absolute justify-around w-full top-1/2 font-thin"
            variants={containerSection2}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center"
              variants={item}
              onClick={() => handleModal(0)}
            >
              <img alt="" src={process} className="h-10 w-auto"></img>
              <p className="text-black text-lg mb-2 mt-[1vh]">Precision engineering</p>
            </motion.div>
            <motion.div
              className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center  hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center"
              variants={item}
              onClick={() => handleModal(1)}
            >
              <img alt="" src={testpassed} className="h-10 w-auto"></img>
              <p className="text-black text-lg mb-2 mt-[1vh]">Quality assurance</p>
            </motion.div>
            <motion.div
              className="flex flex-col border border-solid rounded-lg shadow-2xl
            text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center
            justify-center  hover:bg-slate-400 hover:bg-opacity-50 hover:cursor-pointer text-center"
              variants={item}
              onClick={() => handleModal(2)}
            >
              <img alt="" src={guarantee} className="h-10 w-auto"></img>
              <p  className="text-black text-lg mb-2 mt-[1vh]">
                20 years of manufacturing
              </p>
            </motion.div>
          </motion.div>
        </section>
        <section className="relative w-full h-screen snap-center">
          <div className="h-20v bg-gradient-to-r from-simlift-left to-simlift-right" />
          <div className="block content-center h-65v">
            <Swiper
              className="h-4/6"
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay
              loop={true}
            >
              <SwiperSlide>
                <div className="flex h-full justify-center content-center gap-28 text-center leading-8">
                  <img src={liftS} alt=""></img>
                  <div className="flex flex-col items-center justify-evenly basis-1/4">
                    <h2 className="text-3xl">SIMLIFT S</h2>
                    <p>
                      Electric projector lift recommended for small size
                      Business projectors.Lift with projector requires 15 cm
                      distance between ceiling and false ceiling.Projector power
                      and signal cables are secured wit Easy-chain ® guide.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center gap-28 text-center leading-8">
                  <img src={liftM} alt=""></img>
                  <div className="flex flex-col items-center justify-evenly basis-1/4 ml-10">
                    <h2 className="text-3xl">SIMLIFT S</h2>
                    <p>
                      Electric projector lift recommended for small size
                      Business projectors.Lift with projector requires 15 cm
                      distance between ceiling and false ceiling.Projector power
                      and signal cables are secured wit Easy-chain ® guide.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center gap-28 text-center leading-8">
                  <img src={liftFlap} alt=""></img>
                  <div className="flex flex-col items-center justify-evenly basis-1/4 ml-10">
                    <h2 className="text-3xl">SIMLIFT S</h2>
                    <p>
                      Electric projector lift recommended for small size
                      Business projectors.Lift with projector requires 15 cm
                      distance between ceiling and false ceiling.Projector power
                      and signal cables are secured wit Easy-chain ® guide.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center gap-28 text-center leading-8">
                  <img src={liftKlap} alt=""></img>
                  <div className="flex flex-col items-center justify-evenly basis-1/4 ml-10">
                    <h2 className="text-3xl">SIMLIFT S</h2>
                    <p>
                      Electric projector lift recommended for small size
                      Business projectors.Lift with projector requires 15 cm
                      distance between ceiling and false ceiling.Projector power
                      and signal cables are secured wit Easy-chain ® guide.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center gap-28 text-center leading-8">
                  <img src={liftXL} alt=""></img>
                  <div className="flex flex-col items-center justify-evenly basis-1/4 ml-10">
                    <h2 className="text-3xl">SIMLIFT S</h2>
                    <p>
                      Electric projector lift recommended for small size
                      Business projectors.Lift with projector requires 15 cm
                      distance between ceiling and false ceiling.Projector power
                      and signal cables are secured wit Easy-chain ® guide.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}
