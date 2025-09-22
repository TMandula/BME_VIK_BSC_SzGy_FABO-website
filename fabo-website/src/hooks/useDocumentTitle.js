import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useDocumentTitle = (titleKey) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(titleKey);
  }, [i18n.language, t, titleKey]);
};

export default useDocumentTitle;
