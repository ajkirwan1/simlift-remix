/** @format */
import PropTypes from "prop-types";
import { NavLink } from "@remix-run/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import close from "@public/close.png";
import pdficon from "@public/pdficon.png";
import "swiper/css";
import "swiper/css/navigation";
export default function ProductModalMobile({ handleClick, item }) {
  return (
    <>
      <div className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="flex flex-col w-11/12 sm:w-2/3 h-auto border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2 pt-[3vh] pb-10 relative">
          <img
            alt="closeicon"
            src={close}
            onClick={() => handleClick()}
            onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
            className="ml-8 h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]  absolute right-5 cursor-pointer"
          />

          <h2 className="text-2xl mt-4 sm:mt-10 m-auto text-center w-[70%] text-left">
            {item.fields.title}
          </h2>
          <div className="mt-[2vh]">
            <Swiper
              className="swiper-nav-small"
              // className="h-full"
              modules={[Navigation, Autoplay]}
              // ref={swiperRef}
              slidesPerView={1}
              navigation
              // loop={true}
              style={{
                "--swiper-inactive-scale": ".85",
                "--swiper-mobile-inactive-scale": ".95",
                "--swiper-navigation-size": "30px",
                "--swiper-navigation-color": "rgb(44, 44, 42)",
                //   "--swiper-wrapper-padding": "100px",
              }}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center ">
                  <h3 className="text-lg sm:text-2xl mb-4 sm:mt-2 w-[70%]">
                    <b>Features</b>
                  </h3>
                  <ul className="w-[70%] list-inside mt:3 sm:mt-4 text-sm sm:text-lg pb-5 leading-7 ">
                    {item.fields.features.map((element, index) => (
                      <li key={index}>— {element}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center mt-3">
                  <h3 className="text-lg sm:text-2xl mb-4 sm:mt-0 w-[70%]">
                    <b>Operational Accessories:</b>
                  </h3>
                  <ul className=" w-[70%] list-inside mt:2 sm:mt-5 text-sm sm:text-lg leading-6">
                    {item.fields.accessories.map((element, index) => (
                      <li key={index}>— {element}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-1 justify-center items-center gap-5 text-center mt-8 mb-2">
              <span
                role="button"
                tabIndex={0}
                className="hover:cursor-pointer hover:underline"
                onClick={() => handleClick()}
                onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
              >
                All Products
              </span>
              <NavLink
                className="flex justify-center items-center bg-sky-950 w-28 h-11 rounded-md text-white border-orange-900 border font-normal hover:bg-sky-800"
                to="/contact"
                onClick={() => {
                  document.body.style.overflow = "unset";
                }}
              >
                Enquire
              </NavLink>

              {item.fields.pdf?.fields?.file?.url && (
                <a
                  href={`https:${item.fields.pdf.fields.file.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-100 hover:opacity-100 sm:opacity-70"
                >
                  <img
                    src={pdficon}
                    alt={`PDF for ${item.fields.title}`}
                    className="w-10 h-10 mr-2"
                  />
                </a>
              )}
            </div>
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
