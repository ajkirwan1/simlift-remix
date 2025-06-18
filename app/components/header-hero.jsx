/** @format */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "@remix-run/react";
import logo from "@public/Simlift.png";
import MobileHeaderIcons from "~/components/mobile/header-icons.tsx";
import i18n from "../../i18n";

export default function HeaderHero() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { t } = useTranslation("common");
  return (
    <header className="flex justify-between items-center h-20v text-white font-thin">
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 w-full h-lvh bg-[#083a51] transition duration-300 ease-in-out text-black">
          <ul className="flex flex-col h-100v items-center justify-center gap-7 text-3xl text-white">
            <li>
              <NavLink to="/about">{t("about")}</NavLink>
            </li>
            <li>
              <NavLink to="/products">{t("products")}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t("contact")}</NavLink>
            </li>
            <li>
              <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            </li>
            <li>
              <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
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
            <NavLink to="/about">{t("about")}</NavLink>
          </li>
          <li className="text-xl hover:underline decoration-1">
            <NavLink to="/products">{t("products")}</NavLink>
          </li>
          <li className="text-xl hover:underline decoration-1">
            <NavLink to="/contact">{t("contact")}</NavLink>
          </li>
          <li>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          </li>
          <li>
            <button onClick={() => i18n.changeLanguage("pl")}>PL</button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden w-1/3 mr-2">
        <MobileHeaderIcons setMobileNavOpen={setMobileNavOpen} />
      </div>
    </header>
  );
}
