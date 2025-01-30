/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Header from "~/components/header"
import "swiper/css";
import "swiper/css/navigation";

export default function Products() {
  return (
    <div className="bg-sky-950 h-100v">
    <Header />
      <h1>Products</h1>
      <div>
        <Swiper>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
