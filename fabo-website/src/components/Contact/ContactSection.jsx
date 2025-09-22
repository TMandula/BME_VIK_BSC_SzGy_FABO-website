import React from "react";
import { useTranslation } from "react-i18next";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = ({ action }) => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-gray-200 py-16 mx-auto px-4">
      <h2 className="text-3xl text-center font-bold mb-8">{t("contact.title")}</h2>
      <p className="max-w-xl mx-auto text-lg text-gray-600 mb-12 text-center">{t("contact.description")}</p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <ContactInfo />
        <ContactForm action={action} />
      </div>
    </section>
  );
};

export default ContactSection;
