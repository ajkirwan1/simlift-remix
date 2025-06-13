/** @format */

import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center h-auto pt-5 sm:pt-0 sm:h-15v bg-gradient-to-r from-simlift-left to-simlift-right  text-white border-t border-t-orange800">
      <p className="text-xxs sm:text-xs sm:ml-5">Privacy Policy</p>

      <Link to="https://ak-development.com.pl">
        <p className="text-xxs sm:text-xs underline">Developed by A&K</p>
      </Link>
      <div className="text-xxs sm:text-xs my-5 sm:ml-5 sm:my-0">
        <p>Avers Screens sp. z o.o.</p>
        <p>ul.Radziejowicka 170B</p>
        <p>05-825 Kałęczyn, Poland</p>
      </div>
      <div className="text-xxs sm:text-xs mb-5 sm:mr-5 sm:mb-0">
        <p>biuro@simlift.pl</p>
        <p>+48 798 729 285</p>
        <p>+48 601 302 840</p>
      </div>
    </footer>
  );
}
