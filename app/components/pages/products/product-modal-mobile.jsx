/** @format */
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { NavLink } from "@remix-run/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
export default function ProductModalMobile({ handleClick, item }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperWrapper = swiperRef.current.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        // Apply inline styles to swiper-wrapper
        // swiperWrapper.style.padding = "10px"; // Example: add padding to the wrapper
        // swiperWrapper.style.gap = "20px"; // Example: set the gap between slides
        // swiperWrapper.style.margin = "10px"; // Example: add margin around the wrapper
      }
    }
  }, []);
  return (
    <>
      <div className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center">
        <div className="w-2/3 h-3/4 border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2">
          <h2 className="text-3xl mt-4 sm:mt-10 m-auto text-center">{item.fields.title}</h2>
          <div>

            
          </div>
          <Swiper
            // className="h-full"
            modules={[Navigation, Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            navigation
            loop={true}
            style={{
              "--swiper-inactive-scale": ".85",
              "--swiper-mobile-inactive-scale": ".95",
              "--swiper-navigation-size": "34px",
            //   "--swiper-wrapper-padding": "100px",
            }}
          >
            <SwiperSlide>
              <div className="flex ml-4 flex-col items-center">
                <h3 className="text-lg sm:text-2xl mt-4 sm:mt-10">
                  <b>Features:</b>
                </h3>
                <ul className="list-disc list-inside mt:2 sm:mt-4 leading-8">
                  {item.fields.features.map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </ul>
              </div>
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
          <div className="flex justify-evenly items-center text-center mt-8 mb-2">
            <span
              role="button"
              tabIndex={0}
              className="hover:cursor-pointer hover:underline"
              onClick={() => handleClick()}
              onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
            >
              Back
            </span>
            <NavLink
              className="flex justify-center items-center bg-sky-950 w-28 h-11 rounded-md text-white border-orange-900 border font-thin hover:bg-sky-800"
              to="/contact"
              onClick={() => {
                document.body.style.overflow = "unset";
              }}
            >
              Enquire
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

ProductModalMobile.propTypes = {
  handleClick: PropTypes.func.isRequired, // Validate that 'handleClick' is a function and it's required
  item: PropTypes.object,
};
