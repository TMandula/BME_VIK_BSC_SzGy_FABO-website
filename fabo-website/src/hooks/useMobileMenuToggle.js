import { useRef, useState, useCallback } from "react";

export const useMobileMenuToggle = () => {
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const closeMenuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return {
    hamburgerRef,
    mobileMenuRef,
    mobilePanelRef,
    closeMenuRef,
    isOpen,
    openMenu,
    onClose,
  };
};
