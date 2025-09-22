import { useState, useCallback } from "react";

export const useMobileMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, openMenu, onClose };
};

