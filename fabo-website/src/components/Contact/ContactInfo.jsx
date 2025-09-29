import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="font-bold mb-4">{t("contact.info.locations.title")}</h3>
      <p className="mb-2">📍 {t("contact.info.locations.Budapest")}</p>
      <p className="mb-4">📍 {t("contact.info.locations.Miskolc")}</p>

      <h3 className="font-bold mb-4">{t("contact.info.email.title")}</h3>
      <a href={`mailto:${t("contact.info.email.value")}`} className="mb-4 hover:text-blue-600 hover:underline block">
        {t("contact.info.email.valueName")}
      </a>

      <h3 className="font-bold mb-4">{t("contact.info.phone.title")}</h3>
      <a href={`tel:${t("contact.info.phone.value")}`} className="hover:text-blue-600 hover:underline">
        {t("contact.info.phone.valueName")}
      </a>
    </div>
  );
};

export default ContactInfo;
