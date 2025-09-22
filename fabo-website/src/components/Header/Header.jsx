import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { useResponsiveMenu } from "../../hooks/useResponsiveMenu";
import { useMobileMenuToggle } from "../../hooks/useMobileMenuToggle";

import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import Menu from "../Navigation/Menu";


const Header = () => {
  const { headerRef, hamburgerRef, isAtTop } = useHeaderScroll();
  
  useResponsiveMenu();
  useMobileMenuToggle();

  return (
    <>
      <header ref={headerRef} id="mainHeader" className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-700 ease-in-out group
        ${isAtTop ? "bg-transparent text-white" : "bg-white text-black shadow-md"}`}>
        <div id="header-inner" className="max-w-7xl mx-auto px-4 flex justify-between items-center" style={{ height: "80px" }}>
          <Logo />
          <nav id="desktop-nav" role="navigation" className="flex items-center space-x-8 text-lg font-medium">
            <Menu variant="desktop" />
            <LanguageSwitcher variant="desktop" />
          </nav>
          <HamburgerButton 
            hamburgerRef={hamburgerRef} 
            isAtTop={isAtTop}
          />
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;