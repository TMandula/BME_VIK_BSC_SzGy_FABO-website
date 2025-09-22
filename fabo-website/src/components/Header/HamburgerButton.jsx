const HamburgerButton = ({ hamburgerRef, isAtTop }) => (
    <button ref={hamburgerRef} id="hamburger" className="hidden focus:outline-none" aria-label="Open menu">
        <svg className={`w-8 h-8 transition-colors duration-700 ${isAtTop ? "text-white" : "text-black"}`} 
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
);

export default HamburgerButton;