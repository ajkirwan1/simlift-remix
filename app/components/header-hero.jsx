/** @format */
import { NavLink } from "@remix-run/react";
import logo from "@public/Simlift.png";

export default function HeaderHero() {
  return (
    <header className="flex justify-between items-center h-20v text-white font-thin">
      <NavLink to="/" className="flex items-center h-full">
        <img alt="" src={logo} className="ml-8 h-1/2" />
      </NavLink>
      <ul className="flex mr-8 w-1/3 justify-around list-none">
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
    </header>
  );
}
