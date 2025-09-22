import { useEffect, useState } from "react";

export const useHeaderScroll = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const updateHeader = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        setIsAtTop(scrollY === 0);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);
  return { isAtTop };
};