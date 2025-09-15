import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useResponsiveMenu } from "../../hooks/useResponsiveMenu";
import { useMobileMenuToggle } from "../../hooks/useMobileMenuToggle";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";


const Header = () => {
  const { t, i18n } = useTranslation();
  
  useHeaderScroll("mainHeader", "home", "hamburger");
  useResponsiveMenu();
  useMobileMenuToggle();

  return (
    <>
      {/* HEADER */}
      <header id="mainHeader" className="fixed top-0 left-0 w-full z-50 transform transition-all duration-700 ease-in-out group">
        <div id="header-inner" className="max-w-7xl mx-auto px-4 flex justify-between items-center" style={{ height: "80px" }}>
          <Logo />
          {/* Desktop Menu */}
          <nav id="desktop-nav" role="navigation" className="flex items-center space-x-8 text-lg font-medium">
            <Link to="/" state={{ section: "home" }} className="nav-link">
              {t("common.menu.home")}
            </Link>
            <Link to="/about" state={{ section: "about" }} className="nav-link">
              {t("common.menu.about")}
            </Link>
            <Link to="/services" state={{ section: "services" }} className="nav-link">
              {t("common.menu.services")}
            </Link>
            <Link to="/technologies" state={{ section: "technologies" }} className="nav-link">
              {t("common.menu.technologies")}
            </Link>
            <Link to="/contact" state={{ section: "contact" }} className="nav-link">
              {t("common.menu.contact")}
            </Link>
            <LanguageSwitcher />
          </nav>
          <HamburgerButton />
        </div>
      </header>
      {/* MOBILE HAMBURGER MENU PANEL */}
      <div id="mobileMenu" className="fixed inset-0 hidden z-50">
        {/* The website in the background */}
        <div className="fixed inset-0 bg-black/50 pointer-events-none"></div>
        <div id="mobilePanel" 
          className="absolute right-0 top-0 h-full w-72 bg-white text-black shadow-lg p-6 flex flex-col transform translate-x-full transition-transform duration-300 z-50">
          <button id="closeMenu" 
            className="self-end mb-6" 
            aria-label="Close menu">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" 
              strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Language Selector */}
          <ul className="lang-switch flex items-center mb-8 text-black" role="list">
            <li>
              <button type="button" className="lang-btn px-1 py-0.5" 
                onClick={() => i18n.changeLanguage("de")}
                aria-current={i18n.language === "de" ? "true" : "false"}>
                DE
              </button>
              </li>
            <li aria-hidden="true" className="px-1 lang-divider">|</li>
            <li>
              <button type="button" className="lang-btn px-1 py-0.5" 
                onClick={() => i18n.changeLanguage("en")}
                aria-current={i18n.language === "en" ? "true" : "false"}>
                EN
              </button>
            </li>
          </ul>
          {/* Mobile Menu Items */}
          <Link to="/" state={{ section: "home" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black">
              {t("common.menu.home")}
            </Link>
          <Link to="/about" state={{ section: "about" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black">
              {t("common.menu.about")}
          </Link>
          <Link to="/services" state={{ section: "services" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black">
              {t("common.menu.services")}
          </Link>
          <Link to="/technologies" state={{ section: "technologies" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black">
              {t("common.menu.technologies")}
          </Link>
          <Link to="/contact" state={{ section: "contact" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black">
              {t("common.menu.contact")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;