/** @format */
import PropTypes from "prop-types";
import { NavLink } from "@remix-run/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import close from "@public/close.png";
import pdficon from "@public/pdficon.png";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

export default function ProductModalMobile({ handleClick, item }) {
  const { t, i18n } = useTranslation("common");

  const currentLang = i18n.language;

  // Find matching localized PDF
  const matchingPdf = item.fields.pdfProduct?.find(
    (pdf) => pdf && pdf.fields && pdf.fields.description === currentLang
  );

  const technicalPdf = item.fields.pdf?.fields?.file?.url;

  const pdfUrl = matchingPdf?.fields?.file?.url;

  // Fallback-safe localized product features
  const featuresByLocale = item.fields.productFeatures || {};
  const featuresObject =
    featuresByLocale[currentLang] ||
    featuresByLocale["en"] ||
    Object.values(featuresByLocale)[0] ||
    {};

  // Convert to displayable array
  const featuresArray = Object.entries(featuresObject).map(
    ([key, value]) => `— ${formatKey(key)} – ${value}`
  );

  function formatKey(key) {
    return key
      .replace(/_/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="flex flex-col w-11/12 sm:w-2/3 h-auto border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2 pt-[3vh] pb-10 relative">
        <img
          alt="closeicon"
          src={close}
          onClick={() => handleClick()}
          onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
          className="ml-8 h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] absolute right-5 cursor-pointer"
        />

        <h2 className="text-2xl mt-4 sm:mt-10 m-auto text-center w-[70%] text-left">
          {item.fields.title}
        </h2>

        <div className="mt-[2vh]">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            style={{
              "--swiper-inactive-scale": ".85",
              "--swiper-mobile-inactive-scale": ".95",
              "--swiper-navigation-size": "30px",
              "--swiper-navigation-color": "rgb(44, 44, 42)",
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center ">
                <h3 className="text-lg sm:text-2xl mb-4 sm:mt-2 w-[70%]">
                  {t("features")}
                </h3>
                <ul className="w-[70%] list-inside mt:3 text-sm sm:text-lg pb-5 leading-7">
                  {featuresArray.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="flex flex-col items-center mt-3">
                <h3 className="text-lg sm:text-2xl mb-4 sm:mt-0 w-[70%]">
                  {t("operational accessories")}
                </h3>
                <ul className="w-[70%] list-inside mt:2 sm:mt-5 text-sm sm:text-lg leading-6">
                  {item.fields.accessories?.map((element, index) => (
                    <li key={index}>— {element}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>

        <div className="flex flex-1">
          <div className="flex flex-1 justify-center items-center gap-5 text-center mt-8 mb-2">
            <div className="flex flex-1 justify-center items-center gap-5">
              {/* <span
                role="button"
                tabIndex={0}
                className="hover:cursor-pointer hover:underline"
                onClick={() => handleClick()}
                onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
              >
                {t("All products")}
              </span> */}

              <NavLink
                className="flex justify-center items-center bg-sky-950 w-28 h-11 rounded-md text-white border-orange-900 border font-normal hover:bg-sky-800"
                to="/contact"
                onClick={() => {
                  document.body.style.overflow = "unset";
                }}
              >
                {t("Enquire")}
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
            {pdfUrl && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <a
                  href={`https:${pdfUrl}`}
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
                <span>Technical Details</span>
              </div>
            )}
            {technicalPdf && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <a
                  href={`https:${technicalPdf}`}
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
                <span>Technical Drawing</span>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductModalMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
