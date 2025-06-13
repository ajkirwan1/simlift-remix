/** @format */
import { useState } from "react";
import { NavLink } from "@remix-run/react";
import logo from "@public/Simlift.png";
import MobileHeaderIcons from "~/components/mobile/header-icons.tsx";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-simlift-left to-simlift-right flex justify-between items-center h-20v w-full text-white font-thin ">
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 w-full h-lvh bg-white transition duration-300 ease-in-out text-black">
          <ul className="flex flex-col h-100v items-center justify-center gap-7 text-3xl">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}

      <NavLink to="/" className="flex items-center h-full">
        <img alt="" src={logo} className="ml-8 h-[35%] sm:h-[40%]" />
      </NavLink>
      <div className="max-sm:hidden w-1/3 mr-8">
        <ul className="flex w-full justify-around list-none">
          <li className="text-xl hover:underline decoration-1">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="text-xl hover:underline decoration-1">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="text-xl hover:underline decoration-1">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="sm:hidden w-1/3 mr-2">
        <MobileHeaderIcons setMobileNavOpen={setMobileNavOpen} />
      </div>
    </header>
  );
}
