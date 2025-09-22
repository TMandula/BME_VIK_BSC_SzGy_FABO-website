import LanguageSwitcher from "./LanguageSwitcher";
import Menu from "../Navigation/Menu";

const MobileMenu = () => {

    return (
        <div id="mobileMenu" className="fixed inset-0 hidden z-50">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/50 pointer-events-none"></div>

            {/* Slide-in panel */}
            <div id="mobilePanel" className="absolute right-0 top-0 h-full w-72 bg-white text-black shadow-lg p-6 flex flex-col transform translate-x-full transition-transform duration-500 z-50">
                {/* Close button */}
                <button id="closeMenu" className="self-end mb-6" aria-label="Close menu">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <LanguageSwitcher variant="mobile" />
                <Menu variant="mobile" />
            </div>
        </div>
    );
};

export default MobileMenu;