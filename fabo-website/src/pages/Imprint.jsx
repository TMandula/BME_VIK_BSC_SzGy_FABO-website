import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Imprint = () => {
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
        id="imprint-hero"
        className="w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')",
          height: `${headerHeight}px`
        }}
      >
      </section>

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
