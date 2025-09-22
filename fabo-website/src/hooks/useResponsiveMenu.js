import { useEffect, useState } from "react";

export const useResponsiveMenu = () => {
    const [isDesktopVisible, setIsDesktopVisible] = useState(true);

    const MOBILE_BREAKPOINT = 1024;

    useEffect(() => {
        const updateMenuDisplay = () => {
            setIsDesktopVisible(window.innerWidth >= MOBILE_BREAKPOINT);
        }

        updateMenuDisplay();
        window.addEventListener("resize", updateMenuDisplay);

        return () => window.removeEventListener("resize", updateMenuDisplay);
    }, []);
    return {
        isDesktopVisible,
    };

};