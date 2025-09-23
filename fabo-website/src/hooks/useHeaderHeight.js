import { useEffect, useState } from "react";

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.getElementById("mainHeader");
      if (header) setHeaderHeight(header.offsetHeight);
    };

    updateHeight(); // run once on mount
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return headerHeight;
};
