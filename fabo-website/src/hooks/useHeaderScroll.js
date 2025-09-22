import { useEffect, useState, useRef } from "react";

export const useHeaderScroll = () => {
  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true); // true if scrolly === 0

  useEffect(() => {

    const updateHeader = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        setIsAtTop(scrollY === 0);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);
  
  // return refs so Header.jsx can attach them
  return { headerRef, hamburgerRef, isAtTop };
};