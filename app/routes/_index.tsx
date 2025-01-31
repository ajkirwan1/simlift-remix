/** @format */

import type { MetaFunction } from "@remix-run/node";
import heroImage from "/public/1picture.jpg";
import glassesImage from "/public/glasses.jpg";
import HeaderHero from "~/components/header-hero";
import Footer from "~/components/footer";
import { Navigation, Autoplay } from "swiper/modules";
import guarantee from "/public/blackguarantee.png";
import process from "/public/process.png";
import testpassed from "/public/testpassed.png";
import liftS from "/public/products/SIMLIFT_S_small.jpg";
import liftM from "/public/products/Simlift_M_small.jpg";
import liftFlap from "/public/products/SimliftS_FLAP_small.jpg";
import liftKlap from "/public/products/Simlift_S_z_klapą_small.jpg";
import liftXL from "/public/products/SIMLIFT_XL_PRO_small.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
// s
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="fixed top-0 w-full z-10 border-b-1">
        <HeaderHero />
      </div>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="relative w-full h-screen snap-center snap-always">
          <img
            src={heroImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="absolute flex flex-col items-center w-full  top-1/4  text-white text-center">
            <h1 className="text-4xl mb-32">Ceiling mounted projector lifts</h1>
            <p className="mb-8">Our aim is to deliver top-quality products</p>
            <p className="mb-8 max-w-7xl">From the beginning, and through the evaluation process, we make sure the quality is outstanding</p>
          </div>
        </div>
        <section className="relative w-full h-screen snap-center ">
          <img
            src={glassesImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="absolute flex flex-col items-center w-full  top-1/4  text-white text-center">
            <h1 className="text-4xl mb-8">HIGH QUALITY PRODUCTS</h1>
            <p>Simlift became the no.1 producer of ceiling mounted projector lifts in Poland</p>
          </div>
          <div className="flex absolute justify-around w-full top-1/2">
            <div className="flex flex-col border border-solid rounded-lg shadow-2xl text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center justify-center">
              <img alt="" src={process} className="h-14 w-auto"></img>
              <p className="text-black text-2xl mb-2">Some text</p>
            </div>
            <div className="flex flex-col border border-solid rounded-lg shadow-2xl text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center justify-center">
              <img alt="" src={testpassed} className="h-14 w-auto"></img>
              <p className="text-black text-2xl mb-2">Some text</p>
            </div>
            <div className="flex flex-col border border-solid rounded-lg shadow-2xl text-white text-4xl w-1/5 h-52 bg-slate-100 bg-opacity-80 items-center justify-center">
              <img alt="" src={guarantee} className="h-14 w-auto"></img>
              <p className="text-black text-2xl mb-2">Some text</p>
            </div>
          </div>
        </section>
        <section className="relative w-full h-screen snap-center">
          <div className="h-20v bg-sky-950" />
          <div className="block content-center h-65v">
            <Swiper
              className="h-3/6"
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay
              loop={true}
            >
              <SwiperSlide>
                <div className="flex h-full justify-center content-center">
                  <img src={liftS} alt=""></img>
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
                <div className="flex h-full justify-center content-center">
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
                <div className="flex h-full justify-center content-center">
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
                <div className="flex h-full justify-center content-center">
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
                <div className="flex h-full justify-center content-center">
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
