/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @format */
import React, { useState } from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { NavLink } from "@remix-run/react";

const productList = [
  {
    url: "/products/SIMLIFT_S_small.jpg",
    name: "Simlift S small",
    features: [
      "Operating range up to 850 mm",
      "Operating speed 5,4 cm/s",
      "100W electric motor with 5-years warranty",
      "Supported projector fixing area 360 x 380mm",
      "Dimensions: 575 x 565 x 120mm (W x D x H)",
      "Supported projector dimensions: - 410 x 460 x 100 mm (W x D x H for installation inside lift shelf)",
      "Lift load limit - 15 kg",
    ],
    accessories: [
      "IR-remote control system (ALFA-IR)",
      "Radio remote control systems (ALFA-RADIO, DELTA)",
      "Projector trigger systems (ALFA-TRIGGER, ALFA TRIGGER, WIRELESS, BETA)",
      "SimFlap ceiling flap masking projector's shaft",
    ],
    pdf: "",
  },
  {
    url: "/products/Simlift_M_small.jpg",
    name: "Simlift M small",
    features: [
      "Operating range up to 850 mm",
      "Operating speed 5,4 cm/s",
      "100W electric motor with 5-years warranty",
      "Supported projector fixing area 360 x 380mm",
      "Dimensions: 575 x 565 x 120mm (W x D x H)",
      "Supported projector dimensions: - 410 x 460 x 100 mm (W x D x H for installation inside lift shelf)",
      "Lift load limit - 15 kg",
    ],
    accessories: [
      "IR-remote control system (ALFA-IR)",
      "Radio remote control systems (ALFA-RADIO, DELTA)",
      "Projector trigger systems (ALFA-TRIGGER, ALFA TRIGGER, WIRELESS, BETA)",
      "SimFlap ceiling flap masking projector's shaft",
    ],
  },
  {
    url: "/products/SimliftS_FLAP_small.jpg",
    name: "Simlift Flap",
    features: [
      "Operating range up to 850 mm",
      "Operating speed 5,4 cm/s",
      "100W electric motor with 5-years warranty",
      "Supported projector fixing area 360 x 380mm",
      "Dimensions: 575 x 565 x 120mm (W x D x H)",
      "Supported projector dimensions: - 410 x 460 x 100 mm (W x D x H for installation inside lift shelf)",
      "Lift load limit - 15 kg",
    ],
    accessories: [
      "IR-remote control system (ALFA-IR)",
      "Radio remote control systems (ALFA-RADIO, DELTA)",
      "Projector trigger systems (ALFA-TRIGGER, ALFA TRIGGER, WIRELESS, BETA)",
      "SimFlap ceiling flap masking projector's shaft",
    ],
  },
  {
    url: "/products/Simlift_S_z_klapą_small.jpg",
    name: "Simlift Klapa",
    features: [
      "Operating range up to 850 mm",
      "Operating speed 5,4 cm/s",
      "100W electric motor with 5-years warranty",
      "Supported projector fixing area 360 x 380mm",
      "Dimensions: 575 x 565 x 120mm (W x D x H)",
      "Supported projector dimensions: - 410 x 460 x 100 mm (W x D x H for installation inside lift shelf)",
      "Lift load limit - 15 kg",
    ],
    accessories: [
      "IR-remote control system (ALFA-IR)",
      "Radio remote control systems (ALFA-RADIO, DELTA)",
      "Projector trigger systems (ALFA-TRIGGER, ALFA TRIGGER, WIRELESS, BETA)",
      "SimFlap ceiling flap masking projector's shaft",
    ],
  },
  {
    url: "/products/SIMLIFT_XL_PRO_small.jpg",
    name: "Simlift XL PRO",
    features: [
      "Operating range up to 850 mm",
      "Operating speed 5,4 cm/s",
      "100W electric motor with 5-years warranty",
      "Supported projector fixing area 360 x 380mm",
      "Dimensions: 575 x 565 x 120mm (W x D x H)",
      "Supported projector dimensions: - 410 x 460 x 100 mm (W x D x H for installation inside lift shelf)",
      "Lift load limit - 15 kg",
    ],
    accessories: [
      "IR-remote control system (ALFA-IR)",
      "Radio remote control systems (ALFA-RADIO, DELTA)",
      "Projector trigger systems (ALFA-TRIGGER, ALFA TRIGGER, WIRELESS, BETA)",
      "SimFlap ceiling flap masking projector's shaft",
    ],
  },
];

interface ModalProps {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  chosenItem: {
    url: string;
    name: string;
    features: string[];
    accessories: string[];
  };
}

const Modal = (props: ModalProps) => {
  return (
    <div
      className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center"
      // onClick={props.handleClick}
    >
      <div className="w-2/4 border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2">
        <div className="ml-4">
          <h2 className="text-3xl mt-10">{props.chosenItem.name}</h2>
          <h3 className="text-2xl mt-10">Features:</h3>
          <ul className="list-disc list-inside mt-4">
            {props.chosenItem.features.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
          <h3 className="text-2xl mt-10">Operational Accessories:</h3>
          <ul className="list-disc list-inside mt-4">
            {props.chosenItem.accessories.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-evenly items-center text-center mt-8 mb-2">
          <span className="hover:cursor-pointer hover:underline" onClick={props.handleClick}>Back</span>
          <NavLink className="flex justify-center items-center bg-sky-950 w-28 h-11 rounded-md text-white border-orange-900 border font-thin hover:bg-sky-800" to="/contact">
            Enquire
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState(null);

  const handleClick = (element) => {
    setChosenItem({ ...element });
    console.log(element);
    setBackdropOpen((val) => !val);
    if (backdropOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100px"
    }
  };

  return (
    <>
      {backdropOpen && (
        <Modal handleClick={handleClick} chosenItem={chosenItem}></Modal>
      )}
      <div className="bg-linear-to-r from-cyan-500 to-blue-500">
        <Header />
      </div>
      <div className="ml-8 mt-8">
        <h1 className="text-5xl">Products</h1>
        <p className="mt-8">
          Simlift provides a range of high precision engineered ceiling-mounted
          projector lifts
        </p>
      </div>
      <div className="block content-center h-65v mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 justify-items-center mt-8 mb-8">
          {productList.map((element, index) => (
            <li
              key={index}
              onClick={() => handleClick(element)}
              className="text-center border-2 shadow-[1px_2px_3px_2px_rgba(12,12,12,0.2)] rounded-md border-transparent w-4/5 p-7 hover:cursor-pointer hover:rounded-md hover:border-indigo-200 hover:border-current"
            >
              <img
                alt="alt"
                src={element.url}
                className="h-auto w-52 m-auto "
              />
              <h2 className="mt-4">{element.name}</h2>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </>
  );
}
