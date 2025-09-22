import { useEffect, useState, useRef } from "react";

export const useResponsiveMenu = () => {
    const desktopRef = useRef(null);
    const hamburgerRef = useRef(null);

    const [isDesktopVisible, setIsDesktopVisible] = useState(true);

    const MOBILE_BREAKPOINT = 1024; // adjust as needed

    useEffect(() => {
        const updateMenuDisplay = () => {
            setIsDesktopVisible(window.innerWidth >= MOBILE_BREAKPOINT);
        }

        updateMenuDisplay();
        window.addEventListener("resize", updateMenuDisplay);

        // Cleanup
        return () => window.removeEventListener("resize", updateMenuDisplay);
    }, []);
    return {
        desktopRef,
        hamburgerRef,
        isDesktopVisible,
    };

};