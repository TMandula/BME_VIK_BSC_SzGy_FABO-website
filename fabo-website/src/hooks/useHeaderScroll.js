import { useEffect } from "react";

export const useHeaderScroll = (headerId, heroId, hamburgerId) => {
  useEffect(() => {
    const header = document.getElementById('mainHeader');
    const hero = document.getElementById('home');
    const hamburger = document.getElementById('hamburger');
    const hamburgerSvg = hamburger?.querySelector('svg');

    const updateHeader = () => {
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
        } else if (scrollY > 0) {
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
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader);

    // Cleanup
    return () => window.removeEventListener('scroll', updateHeader);
  }, [headerId, heroId, hamburgerId]);
};