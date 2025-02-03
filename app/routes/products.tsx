/** @format */
import React, { useState } from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";

const productList = [
  { url: "/public/products/SIMLIFT_S_small.jpg", name: "Simlift S small" },
  { url: "/public/products/Simlift_M_small.jpg", name: "Simlift M small" },
  { url: "/public/products/SimliftS_FLAP_small.jpg", name: "Simlift Flap" },
  {
    url: "/public/products/Simlift_S_z_klapą_small.jpg",
    name: "Simlift Klapa",
  },
  { url: "/public/products/SIMLIFT_XL_PRO_small.jpg", name: "Simlift XL PRO" },
];

interface ModalProps {
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  chosenItem: {url: string, name: string}
}

const Modal = (props: ModalProps) => {
  return (
    <div
      className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center"
      onClick={props.handleClick}
    >
      <div className="h-2/3 w-2/4 border-4 border-sky-950 rounded-2xl shadow-lg bg-white text-black ">
        <div className="ml-4">
          <h2 className="text-3xl mt-10">{props.chosenItem.name}</h2>
          <p className="mt-10">Blah blah blah</p>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState(null)

  const handleClick = (element) => {
    setChosenItem({...element})
    console.log(element);
    setBackdropOpen((val) => !val);
    if (backdropOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      {backdropOpen && <Modal handleClick={handleClick} chosenItem={chosenItem}></Modal>}
      <div className="bg-sky-950">
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
        <ul className="grid grid-cols-3 gap-4 gap-y-10 justify-items-center mt-8 mb-8">
          {productList.map((element, index) => (
            <li
              key={index}
              onClick={() => handleClick(element)}
              className="text-center border-2 shadow-md border-transparent w-4/5 p-7 hover:cursor-pointer hover:rounded-md hover:border-indigo-200 hover:border-current"
            >
              <img
                alt="alt"
                src={element.url}
                className="h-40v w-auto m-auto "
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
