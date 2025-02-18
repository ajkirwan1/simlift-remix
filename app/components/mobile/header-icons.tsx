/** @format */
import { useState } from "react";
import { IconContext } from "react-icons";
import { RxCross1 } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";

export default function MobileHeaderIcons({setMobileNavOpen}: { setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [mobileIconOpen, setMobileIconOpen] = useState<boolean>(false);

  const handleMobileIconOpen = () => {
    setMobileIconOpen((val) => !val);
    setMobileNavOpen(val => !val)
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="relative flex w-full justify-around list-none z-20"
        onClick={handleMobileIconOpen}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleMobileIconOpen()
        }
      >
        {mobileIconOpen ? (
          <IconContext.Provider value={{ color: "black", size: "40px" }}>
            <RxCross1 />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <VscMenu />
          </IconContext.Provider>
        )}
      </div>
    </>
  );
}
