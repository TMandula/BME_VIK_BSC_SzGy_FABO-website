import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    // HEADER SCRIPT
    const header = document.getElementById('mainHeader');
    const hero = document.getElementById('home');
    const hamburger = document.getElementById('hamburger');
    const hamburgerSvg = hamburger?.querySelector('svg');

    function updateHeader() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = hero?.offsetHeight || 0;

      if (scrollY === 0) {
        header.classList.remove(
          'translate-y-[-100%]','opacity-0',
          'bg-white','text-black','shadow-md'
        );
        header.classList.add(
          'translate-y-0','opacity-100',
          'bg-transparent','text-white'
        );
        hamburgerSvg?.classList.remove('text-black');
        hamburgerSvg?.classList.add('text-white');
      } else if (scrollY > 0 && scrollY < heroHeight) {
        header.classList.remove(
          'translate-y-0','opacity-100',
          'bg-white','text-black','bg-transparent','text-white'
        );
        header.classList.add('translate-y-[-100%]','opacity-0');
      } else {
        header.classList.remove(
          'translate-y-[-100%]','opacity-0',
          'bg-transparent','text-white'
        );
        header.classList.add(
          'translate-y-0','opacity-100',
          'bg-white','text-black','shadow-md'
        );
        hamburgerSvg?.classList.remove('text-white');
        hamburgerSvg?.classList.add('text-black');
      }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader);

    // MOBILE HAMBURGER MENU PANEL SCRIPT
    function updateMenuDisplay() {
      const desktopNav = document.getElementById("desktop-nav");
      const hamburger = document.getElementById("hamburger");
      const headerInner = document.getElementById("header-inner");
      const siteLogo = document.getElementById("siteLogo");
      const langSwitch = document.querySelector(".lang-switch");
      const mobileMenu = document.getElementById("mobileMenu");
      const mobilePanel = document.getElementById("mobilePanel");

      desktopNav.classList.remove("hidden");
      const totalWidth =
        (siteLogo?.scrollWidth || 0) +
        (desktopNav?.scrollWidth || 0) +
        (langSwitch?.scrollWidth || 0) +
        40;

      if (totalWidth > headerInner.clientWidth) {
        desktopNav.classList.add("hidden");
        hamburger.classList.remove("hidden");
      } else {
        desktopNav.classList.remove("hidden");
        hamburger.classList.add("hidden");
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobilePanel.classList.add("translate-x-full");
          setTimeout(() => mobileMenu.classList.add("hidden"), 300);
        }
      }
    }
    window.updateMenuDisplay = updateMenuDisplay;

    updateMenuDisplay();
    window.addEventListener("resize", updateMenuDisplay);
    const headerInner = document.getElementById("header-inner");
    if (headerInner) {
      new window.ResizeObserver(updateMenuDisplay).observe(headerInner);
    }

    // Mobile menu open/close
    const mobileMenu = document.getElementById("mobileMenu");
    const mobilePanel = document.getElementById("mobilePanel");
    const closeMenu = document.getElementById("closeMenu");

    function openMenu() {
      mobileMenu.classList.remove("hidden");
      setTimeout(() => mobilePanel.classList.remove("translate-x-full"), 10);
    }
    function closeMenuPanel() {
      mobilePanel.classList.add("translate-x-full");
      setTimeout(() => mobileMenu.classList.add("hidden"), 300);
    }
    hamburger?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeMenuPanel);
    mobileMenu?.addEventListener("click", (e) => {
      if (e.target === mobileMenu || e.target.classList.contains("bg-opacity-50")) {
        closeMenuPanel();
      }
    });

    // LANGUAGE SWITCH SCRIPT
    function setLanguage(lang) {
      document.querySelectorAll('[data-lang-de],[data-lang-en]').forEach(el => {
        const txt = (lang === 'de') ? el.getAttribute('data-lang-de') : el.getAttribute('data-lang-en');
        if (txt !== null) el.textContent = txt;
      });
      document.querySelectorAll('[data-placeholder-de],[data-placeholder-en]').forEach(el => {
        const ph = (lang === 'de') ? el.getAttribute('data-placeholder-de') : el.getAttribute('data-placeholder-en');
        if (ph !== null) el.setAttribute('placeholder', ph);
      });
      localStorage.setItem('siteLang', lang);
      document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.setAttribute('aria-current', btn.dataset.langBtn === lang ? 'true' : 'false');
      });
      document.querySelectorAll('[data-title-de],[data-title-en]').forEach(el => {
        const msg = (lang === 'de') ? el.getAttribute('data-title-de') : el.getAttribute('data-title-en');
        if (msg !== null) el.setAttribute('title', msg);
      });
    }

    function langClickHandler(e) {
      const btn = e.target.closest('[data-lang-btn]');
      if (!btn) return;
      const newLang = btn.dataset.langBtn;
      setLanguage(newLang);
      if (typeof window.updateMenuDisplay === "function") {
        window.updateMenuDisplay();
      }
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
    document.addEventListener('click', langClickHandler);

    // Init language on load
    const saved = localStorage.getItem('siteLang') || 'de';
    setLanguage(saved);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener("resize", updateMenuDisplay);
      document.removeEventListener('click', langClickHandler);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header id="mainHeader" className="fixed top-0 left-0 w-full z-50 transform transition-all duration-700 ease-in-out group">
        <div id="header-inner" className="max-w-7xl mx-auto px-4 flex justify-between items-center" style={{ height: "80px" }}>
          {/* Logo */}
          <Link to="/" state={{ section: "home" }} id="siteLogo" className="flex items-center space-x-3">
            <span className="brand-main text-5xl tracking-wide flex items-center" style={{ fontFamily: "'DM Serif Text', serif", lineHeight: 1 }}>
              FABO
            </span>
            <span className="brand-main text-4xl font-bold tracking-wide flex items-center" style={{ fontFamily: "'DM Serif Text', serif", lineHeight: 1 }}>
              |
            </span>
            <div className="flex flex-col justify-center leading-[1.1] ml-2">
              <span className="brand-sub text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }} data-lang-de="BUCHHALTUNG" data-lang-en="ACCOUNTING">
                ACCOUNTING
              </span>
              <span className="brand-sub text-base font-semibold -mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }} data-lang-de="& DIENSTLEISTUNGEN" data-lang-en="& SERVICES">
                & SERVICES
              </span>
            </div>
          </Link>
          {/* Desktop Menu */}
          <nav id="desktop-nav" role="navigation" className="flex items-center space-x-8 text-lg font-medium">
            <Link to="/" state={{ section: "home" }} className="nav-link" data-lang-de="Startseite" data-lang-en="Home">Startseite</Link>
            <Link to="/about" state={{ section: "about" }} className="nav-link" data-lang-de="Über uns" data-lang-en="About us">Über uns</Link>
            <Link to="/services" state={{ section: "services" }} className="nav-link" data-lang-de="Dienstleistungen" data-lang-en="Services">Dienstleistungen</Link>
            <Link to="/technologies" state={{ section: "technologies" }} className="nav-link" data-lang-de="Technologien" data-lang-en="Technologies">Technologien</Link>
            <Link to="/contact" state={{ section: "contact" }} className="nav-link" data-lang-de="Kontakt" data-lang-en="Contact">Kontakt</Link>
            {/* Language Selector */}
            <ul className="lang-switch flex items-center ml-4" role="list">
              <li><button type="button" className="lang-btn px-1 py-0.5" data-lang-btn="de">DE</button></li>
              <li aria-hidden="true" className="px-1 lang-divider">|</li>
              <li><button type="button" className="lang-btn px-1 py-0.5" data-lang-btn="en">EN</button></li>
            </ul>
          </nav>
          {/* Hamburger Icon */}
          <button 
            id="hamburger" 
            className="hidden focus:outline-none"
            aria-label="Open menu">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {/* MOBILE HAMBURGER MENU PANEL */}
      <div id="mobileMenu" className="fixed inset-0 hidden z-50">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div id="mobilePanel" className="absolute right-0 top-0 h-full w-72 bg-white text-black shadow-lg p-6 flex flex-col transform translate-x-full transition-transform duration-300 z-50">
          <button id="closeMenu" className="self-end mb-6" aria-label="Close menu">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Language Selector */}
          <ul className="lang-switch flex items-center mb-8 text-black" role="list">
            <li><button type="button" className="lang-btn px-1 py-0.5 hover:text-blue-500 text-black" data-lang-btn="de">DE</button></li>
            <li aria-hidden="true" className="px-1 lang-divider text-black">|</li>
            <li><button type="button" className="lang-btn px-1 py-0.5 hover:text-blue-500 text-black" data-lang-btn="en">EN</button></li>
          </ul>
          {/* Mobile Menu Items */}
          <Link to="/" state={{ section: "home" }} 
            className="py-2 border-b border-gray-200 hover:text-blue-500 text-black"
            data-lang-de="Startseite" data-lang-en="Home">Home</Link>
          <Link to="/about" state={{ section: "about" }} className="py-2 border-b border-gray-200 hover:text-blue-500 text-black" 
            data-lang-de="Über uns" data-lang-en="About">Über uns</Link>
          <Link to="/services" state={{ section: "services" }} className="py-2 border-b border-gray-200 hover:text-blue-500 text-black" 
            data-lang-de="Dienstleistungen" data-lang-en="Services">Dienstleistungen</Link>
          <Link to="/technologies" state={{ section: "technologies" }} className="py-2 border-b border-gray-200 hover:text-blue-500 text-black" 
            data-lang-de="Technologien" data-lang-en="Technologies">Technologien</Link>
          <Link to="/contact" state={{ section: "contact" }} className="py-2 border-b border-gray-200 hover:text-blue-500 text-black" 
            data-lang-de="Kontakt" data-lang-en="Contact">Kontakt</Link>
        </div>
      </div>
    </>
  );
};

export default Header;