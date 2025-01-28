/** @format */

import type { MetaFunction } from "@remix-run/node";
import heroImage from "/public/1picture.jpg";
import glassesImage from "/public/glasses.jpg";
import Header from "~/components/header";
import { Navigation } from "swiper/modules";
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
        <Header />
      </div>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="relative w-full h-screen snap-center snap-always">
          <img
            src={heroImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="absolute top-1/4 left-1/3 text-white">
            <h1 className="text-4xl">Ceiling mounted projector lifts</h1>
          </div>
        </div>
        <section className="relative w-full h-screen snap-center ">
          <img
            src={glassesImage}
            alt=""
            className="object-cover w-full h-screen"
          />
          <div className="flex absolute justify-around w-full top-1/2">
            <div className="border border-solid rounded-sm text-white text-4xl w-1/5 h-52">
              box
            </div>
            <div className="border border-solid rounded-sm text-white text-4xl w-1/5 h-52">
              box
            </div>
            <div className="border border-solid rounded-sm text-white text-4xl w-1/5 h-52">
              box
            </div>
          </div>
        </section>
        <section className="relative w-full h-screen snap-center">
          <div className="h-20v bg-sky-950">
            <Swiper
              className="h-48"
              modules={[Navigation]}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide>
                <div className="flex h-full justify-center content-center">
                  <img src={liftS} alt=""></img>
                  <div className="flex flex-col basis-1/4">
                    <h2>SIMLIFT S</h2>
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
                  <p>2</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center">
                  <img src={liftFlap} alt=""></img>
                  <p>3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center">
                  <img src={liftKlap} alt=""></img>
                  <p>4</p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex align-middle justify-center">
                <div className="flex h-full justify-center content-center">
                  <img src={liftXL} alt=""></img>
                  <p>5</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>

      {/* <Swiper
        className="h-48"
        modules={[Navigation]}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>
          <div className="flex h-full justify-center content-center">
            <img src={remixIcon} alt=""></img>
            <p>1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center">
          <div className="flex h-full justify-center content-center">
            <img src={remixIcon} alt=""></img>
            <p>2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center">
          <div className="flex h-full justify-center content-center">
            <img src={remixIcon} alt=""></img>
            <p>3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center">
          <div className="flex h-full justify-center content-center">
            <img src={remixIcon} alt=""></img>
            <p>4</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center">
          <div className="flex h-full justify-center content-center">
            <img src={remixIcon} alt=""></img>
            <p>5</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex align-middle justify-center">
          <div className="flex justify-center">
            <img src={remixIcon} alt=""></img>
            <p>6</p>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
