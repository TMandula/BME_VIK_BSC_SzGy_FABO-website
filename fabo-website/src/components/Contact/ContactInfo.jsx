import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="font-bold mb-4">{t("common.company.locations.title")}</h3>
      <p className="mb-2">📍 {t("common.company.locations.Budapest")}</p>
      <p className="mb-4">📍 {t("common.company.locations.Miskolc")}</p>

      <h3 className="font-bold mb-4">{t("common.info.email.title")}</h3>
      <a href={`mailto:${t("common.info.email.value")}`} className="mb-4 hover:text-blue-600 hover:underline block">
        {t("common.info.email.value")}
      </a>

      <h3 className="font-bold mb-4">{t("common.info.phone.title")}</h3>
      <a href={`tel:${t("common.info.phone.value")}`} className="hover:text-blue-600 hover:underline">
        {t("common.info.phone.value")}
      </a>
    </div>
  );
};

export default ContactInfo;
