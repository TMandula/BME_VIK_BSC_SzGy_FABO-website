import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useResponsiveMenu } from "../../hooks/useResponsiveMenu";
import { useMobileMenuToggle } from "../../hooks/useMobileMenuToggle";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";


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
            <LanguageSwitcher variant="header" />
          </nav>
          <HamburgerButton />
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;