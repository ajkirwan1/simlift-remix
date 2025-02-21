/**
 * eslint-disable jsx-a11y/no-noninteractive-element-interactions
 *
 * @format
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @format */
import { useState } from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { NavLink, useLoaderData } from "@remix-run/react";
import { getAllLifts } from "api/get-all-lifts";
import ProductModalMobile from "~/components/pages/products/product-modal-mobile"

interface Item {
  fields: {
    name: string;
    features: string[];
    accessories: string[];
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
  };
}

interface ModalProps {
  item: Item | null; // Add the correct type for the item prop
  handleClick: (() => void) | ((item?: Item) => void);
}

const Modal = ({ item, handleClick }: ModalProps) => {
  return (
    <div className="fixed h-full w-screen bg-black bg-opacity-80 flex justify-center items-center">
      <div className="w-11/12 sm:w-2/4 border border-orange-900 rounded-2xl shadow-lg bg-white text-black p-2">
        <div className="ml-4">
          <h2 className="text-3xl mt-4 sm:mt-10">{item!.fields.title}</h2>
          <h3 className="text-lg sm:text-2xl mt-4 sm:mt-10">
            <b>Features:</b>
          </h3>
          <ul className="list-disc list-inside mt:2 sm:mt-4">
            {item!.fields.features.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
          <h3 className="text-lg sm:text-2xl mt-4 sm:mt-10">
            <b>Operational Accessories:</b>
          </h3>
          <ul className="list-disc list-inside mt:2 sm:mt-4">
            {item!.fields.accessories.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-evenly items-center text-center mt-8 mb-2">
          <span
            className="hover:cursor-pointer hover:underline"
            onClick={() => handleClick()}
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
  );
};

export async function loader() {
  return Response.json(await getAllLifts());
}

export default function Products() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [chosenItem, setChosenItem] = useState<null | Item>(null);

  const handleClick = (item?: Item) => {
    if (item) {
      setChosenItem({ ...item });
    }

    setBackdropOpen((val) => !val);
    if (backdropOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100px";
    }
  };

  const data = useLoaderData<typeof loader>();

  return (
    <>
      {backdropOpen && (
        <>
          {/* <div className="hidden sm:flex">
            <Modal handleClick={handleClick} item={chosenItem}></Modal>
          </div> */}
          <div>
            <ProductModalMobile handleClick={handleClick} item={chosenItem} />
          </div>
        </>
      )}
      <div className="bg-linear-to-r from-cyan-500 to-blue-500">
        <Header />
      </div>
      <div className="ml-8 mt-8">
        <h1 className="text-2xl sm:text-4xl">Products</h1>
        <p className="mt-6 sm:mt-8">
          Simlift provides a range of high precision engineered ceiling-mounted
          projector lifts
        </p>
      </div>
      <div className="block content-center h-65v mt-4 sm:mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 justify-items-center mt-8 mb-8">
          {Array.isArray(data) ? (
            <>
              {data.map((item, index) => (
                <li
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="button"
                  tabIndex={0}
                  key={index}
                  onClick={() => handleClick(item)}
                  onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
                  className="text-center border-2 shadow-[1px_2px_3px_2px_rgba(12,12,12,0.2)] rounded-md border-transparent w-4/5 p-7 hover:cursor-pointer hover:rounded-md hover:border-indigo-200 hover:border-current"
                >
                  <img
                    alt="alt"
                    src={item.fields.image!.fields.file.url}
                    className="h-auto w-52 m-auto "
                  />
                  <h2 className="mt-4">{item.fields.title}</h2>
                </li>
              ))}
            </>
          ) : (
            <div>Error</div>
          )}
        </ul>
        <Footer />
      </div>
    </>
  );
}
