import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeader = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  
  const location = useLocation();
  const section = location.state?.section;

  // Track header height + scroll state
  useEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById("mainHeader");
      if (header) setHeaderHeight(header.offsetHeight);
    };

    const updateScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    updateHeight();
    updateScroll();

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  // Scroll to section if route state specifies it
  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      const header = document.getElementById("mainHeader");
      if (el && header) {
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elTop - header.offsetHeight,
          behavior: "smooth",
        });
      }
    }
  }, [section]);

  return { headerHeight, isAtTop };
};
