/** @format */
import { NavLink } from "@remix-run/react";
import logo from "@public/Simlift.png"


export default function Header() {
  return (
    <header className="flex justify-between items-center h-32 bg-blue-800">
      <img alt="" src={logo} className="ml-8 h-full"></img>
      <ul className="flex mr-8 w-64 justify-around list-none">
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
    </header>
  );
}
