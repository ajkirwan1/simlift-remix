/** @format */
import { NavLink } from "@remix-run/react";
import logo from "@public/Simlift.png";
import MobileHeaderIcons from "~/components/mobile/header-icons.tsx";

export default function HeaderHero() {
  return (
    <header className="flex justify-between items-center h-20v text-white font-thin">
      <NavLink to="/" className="flex items-center h-full">
        <img alt="" src={logo} className="ml-8 h-[40%]" />
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
        <MobileHeaderIcons />
      </div>
    </header>
  );
}
