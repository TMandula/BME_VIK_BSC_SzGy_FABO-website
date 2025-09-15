import { useEffect } from "react";

export const useResponsiveMenu = () => {
    useEffect(() => {
        const updateMenuDisplay = () => {
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

        // Cleanup
        return () => window.removeEventListener("resize", updateMenuDisplay);
    }, []);
};