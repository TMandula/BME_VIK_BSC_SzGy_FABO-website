import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToSection = (headerHeight) => {
  const location = useLocation();
  const section = location.state?.section;

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      const header = document.getElementById("mainHeader");
      if (el && header) {
        const elTop = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elTop - headerHeight,
          behavior: "smooth"
        });
      }
    }
  }, [section, headerHeight]);
};
