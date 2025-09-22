import LanguageSwitcher from "./LanguageSwitcher";
import Menu from "../Navigation/Menu";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // backdrop click closes menu
      }}
      className={`fixed inset-0 z-50 transition-opacity duration-300 
        ${isOpen ? "bg-black/50 opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} 
            fixed top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col transform transition-transform duration-300 z-50`}>
        <button
            onClick={onClose}
            className="self-end mb-6" 
            aria-label="Close menu">
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