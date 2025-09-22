import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useResponsiveMenu } from "../../hooks/useResponsiveMenu";
import { useMobileMenuToggle } from "../../hooks/useMobileMenuToggle";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import Menu from "../Navigation/Menu";


const Header = () => {
  const { isAtTop } = useHeaderScroll();
  const { isDesktopVisible } = useResponsiveMenu();
  const { isOpen, openMenu, onClose } = useMobileMenuToggle();

  return (
    <>
      <header id="mainHeader" 
        className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-700 ease-in-out group
          ${isAtTop ? "bg-transparent text-white" : "bg-white text-black shadow-md"}`}>
        <div id="header-inner" className="max-w-7xl mx-auto px-4 flex justify-between items-center" style={{ height: "80px" }}>
          <Logo />
          {/* Desktop Nav */}
          <nav
            id="desktop-nav"
            role="navigation"
            className={`flex items-center space-x-8 text-lg font-medium"
              ${isDesktopVisible ? "flex" : "hidden"}`}
          >
            <Menu variant="desktop" />
            <div >
              <LanguageSwitcher variant="desktop" />
            </div>
          </nav>
          <HamburgerButton
              onClick={openMenu}
              isAtTop={isAtTop} 
              className={`${isDesktopVisible ? "hidden" : "block"}`}
          />
        </div>
      </header>
      <MobileMenu
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default Header;