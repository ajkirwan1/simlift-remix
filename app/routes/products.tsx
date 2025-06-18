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
import { useLoaderData } from "@remix-run/react";
import { getAllLifts } from "api/get-all-lifts";
import ProductModalMobile from "~/components/pages/products/product-modal-mobile";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common");

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
      <div className="bg-gray-200">
        <div className="p-8 pb-0">
          <h1 className="text-2xl sm:text-4xl text-center text-gray-700">
            {t("products1")}
          </h1>
          <p className="mt-6 sm:mt-8 text-l sm:text-xl text-center font-light">
            {t("products2")}
          </p>
        </div>
        <div className="block content-center h-65v mt-4 sm:mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 justify-items-center mt-8 pb-16 bg-gray-200">
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
                    className="text-center border-2 shadow-[1px_2px_3px_2px_rgba(12,12,12,0.2)] rounded-md border-transparent w-4/5 p-7 bg-white hover:cursor-pointer hover:rounded-md hover:border-indigo-200 hover:border-current hover:scale-[1.05] transition-transform"
                  >
                    <img
                      alt="alt"
                      src={item.fields.image!.fields.file.url}
                      className="h-auto w-52 m-auto "
                    />
                    <h2 className="mt-4 text-xl">{item.fields.title}</h2>
                  </li>
                ))}
              </>
            ) : (
              <div>Error</div>
            )}
          </ul>
          <Footer />
        </div>
      </div>
    </>
  );
}
