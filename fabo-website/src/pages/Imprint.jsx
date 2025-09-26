import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import { useHeader } from "../hooks/useHeader";

const Imprint = () => {
  const { t } = useTranslation();
    const { headerHeight } = useHeader();

  return (
    <>
      {/* Hero-style header background */}
      <HeroSection
        id="imprint-hero"
        image="/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg"
        height={headerHeight}
      />

      {/* Content section */}

      <section id="imprint-home" className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">{t("imprint.title")}</h1>
        <h2 className="mb-6"><strong>{t("imprint.company")}</strong></h2>

        <p className="mb-2"><strong>{t("imprint.taxNumber.title")}</strong> {t("imprint.taxNumber.value")}</p>
        <p className="mb-2"><strong>{t("imprint.vatId.title")}</strong> {t("imprint.vatId.value")}</p>
        <p className="mb-2"><strong>{t("imprint.companyNumber.title")}</strong> {t("imprint.companyNumber.value")}</p>
        <p className="mb-6"><strong>{t("imprint.activityCode.title")}</strong>{t("imprint.activityCode.value")}</p>
        

        <p className="mb-2"><strong>{t("imprint.establishmentDate.title")}</strong> {t("imprint.establishmentDate.value")}</p>
        <p className="mb-2"><strong>{t("imprint.managingDirector.title")}</strong> {t("imprint.managingDirector.value")}</p>
        <p className="mb-2"><strong>{t("imprint.headquarters.title")}</strong> {t("imprint.headquarters.value")}</p>
        <p className="mb-6"><strong>{t("imprint.supervisoryAuthority.title")}</strong>{t("imprint.supervisoryAuthority.value")}</p>

        <p className="text-sm text-gray-600">{t("imprint.disclaimer")}</p>
      </section>
    </>
  );
};

export default Imprint;
