import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const section = location.state?.section;
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get dynamic header height
    const header = document.getElementById("mainHeader");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      const header = document.getElementById("mainHeader");
      if (header) setHeaderHeight(header.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
      if (section) {
          const el = document.getElementById(section);
          const header = document.getElementById("mainHeader");
          if (el) {
              const headerHeight = header.offsetHeight; // dynamic header height
              const elTop = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elTop - headerHeight, // offset by header height
                  behavior: "smooth"
              });
          }
      }
  }, [section]);

  return (
    <>
      {/* Hero-style header background */}
      <section
        id="privacy-policy-hero"
        className="w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')",
          height: `${headerHeight}px`
        }}
      >
      </section>
      
      {/* Content Section */}
      <section id="privacy-policy" className="max-w-3xl mx-auto px-6 py-16 space-y-4">
        <h1 className="text-3xl font-bold mb-10">
          {t("privacy.title")}
        </h1>

        {/* 1. Responsible Body */}
        <h2 className="text-xl font-semibold">
          {t("privacy.responsibleBody.title")}
        </h2>
        <ul className="mb-10 ml-6 space-y-2">
          <li>{t("privacy.responsibleBody.name")}</li>
          <li>{t("privacy.responsibleBody.street")}</li>
          <li>{t("privacy.responsibleBody.city")}</li>
          <li data-lang-de="Ungarn" data-lang-en="Hungary">{t("privacy.responsibleBody.country")}</li>
          <li>
            <a href="mailto:fabobudapest@gmail.com" 
              className="mb-4 hover:text-blue-600 hover:underline">
              {t("common.info.email.value")}
            </a>
          </li>
        </ul>
        

        {/* 2. Data Collection */}
        <h2 className="text-xl font-semibold">
          {t("privacy.dataCollection.title")}
        </h2>
        <p className="mb-10">
          {t("privacy.dataCollection.description")}
        </p>

        {/* 3. Legal Basis */}
        <h2 className="text-xl font-semibold">
          {t("privacy.legalBasis.title")}
        </h2>
        <p className="mb-10">
          {t("privacy.legalBasis.description")}
        </p>

        {/* 4. User Rights */}
        <h2 className="text-xl font-semibold">
          {t("privacy.userRights.title")}
        </h2>
        <ul className="list-disc ml-6 space-y-2 mb-10">
          <li>{t("privacy.userRights.right1")}</li>
          <li>{t("privacy.userRights.right2")}</li>
          <li>{t("privacy.userRights.right3")}</li>
          <li>{t("privacy.userRights.right4")}</li>
          <li>{t("privacy.userRights.right5")}</li>
        </ul>
      </section>
    </>
  );
};

export default PrivacyPolicy;
