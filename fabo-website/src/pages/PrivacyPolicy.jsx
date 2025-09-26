import { useTranslation } from "react-i18next";
import { useHeader } from "../hooks/useHeader";
import HeroSection from "../components/HeroSection";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { headerHeight } = useHeader();

  return (
    <>
      {/* Hero-style header background */}
      <HeroSection
        id="privacy-policy-hero"
        image="/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg"
        height={headerHeight}
      />
      
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
          <li>{t("privacy.responsibleBody.country")}</li>
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
