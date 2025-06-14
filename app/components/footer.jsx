/** @format */

import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="flex justify-center h-screen pt-5 sm:pt-0 sm:h-15v bg-gradient-to-r from-simlift-left to-simlift-right  text-white border-t border-t-orange800 snap-center">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between align-center w-screen">
        <p className="text-xxs sm:text-xs sm:ml-5 hidden">Privacy Policy</p>

        <Link className="order-3" to="https://ak-development.com.pl">
          <p className="text-xxs sm:text-xs underline pr-0 sm:p-5">
            Developed by A&K
          </p>
        </Link>
        <div className="text-xxs leading-8 sm:text-xs my-5 sm:ml-5 sm:my-0 order-1 text-center sm:text-left">
          <p>Avers Screens sp. z o.o.</p>
          <p>ul.Radziejowicka 170B</p>
          <p>05-825 Kałęczyn, Poland</p>
        </div>
        <div className="text-xxs leading-8 sm:text-xs mb-5 sm:mr-5 sm:mb-0 text-center order-2">
          <p>biuro@simlift.pl</p>
          <p>+48 798 729 285</p>
          <p>+48 601 302 840</p>
        </div>
      </div>
    </footer>
  );
}
