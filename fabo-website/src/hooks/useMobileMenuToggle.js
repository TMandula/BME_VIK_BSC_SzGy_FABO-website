import { useEffect } from "react";

export const useMobileMenuToggle = () => {
    useEffect(() => {
        const hamburger = document.getElementById("hamburger");
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

        return () => {
            hamburger?.removeEventListener("click", openMenu);
            closeMenu?.removeEventListener("click", closeMenuPanel);
            mobileMenu?.removeEventListener("click", closeMenuPanel);
        };
    }, []);
};