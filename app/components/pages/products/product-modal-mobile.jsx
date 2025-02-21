/** @format */
import PropTypes from "prop-types";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function ProductModalMobile({ handleClick, item }) {
  return (
    <>
      <div className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center">
        <div className="w-11/12 h-3/4 border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2">
          <Swiper
            className="h-full"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            loop={true}
             style={{
            "--swiper-inactive-scale": ".85",
            "--swiper-mobile-inactive-scale": ".95",
            "--swiper-navigation-size": "34px",
          }}
          >
            <SwiperSlide>
            <div className="ml-4">
          <h2 className="text-3xl mt-4 sm:mt-10">{item.fields.title}</h2>
          <h3 className="text-lg sm:text-2xl mt-4 sm:mt-10">
            <b>Features:</b>
          </h3>
          <ul className="list-disc list-inside mt:2 sm:mt-4">
            {item.fields.features.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
              <span
                role="button"
                className="hover:cursor-pointer hover:underline"
                onClick={() => handleClick()}
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
              >
                Back
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col sm:flex-row h-full justify-center content-center sm:gap-28 text-center sm:leading-8">
                <div className="flex flex-col items-center justify-evenly basis-1/4">
                  <h2 className="text-2xl sm:text-3xl mt-6">AAA</h2>
                  <p className="w-5/6 mt-2">AAAAAA</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

ProductModalMobile.propTypes = {
  handleClick: PropTypes.func.isRequired, // Validate that 'handleClick' is a function and it's required
  item: PropTypes.object,
};
