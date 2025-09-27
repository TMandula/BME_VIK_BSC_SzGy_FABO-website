import { useTranslation } from "react-i18next";
import "../index.css"

const Services = () => {
  const { t } = useTranslation();

  return (
    <>            
        {/* SERVICES SECTION */}
        <section id="services" className="bg-gray-200 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-8">
                    {t("services.title")}
                </h2>

                {/* Intro */}
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
                    {t("services.intro")}
                </p>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {/* Service 1 */}
                    <div className="service-card border-transparent hover:border-blue-500">
                        <div className="service-icon text-blue-500">
                        <i className="fas fa-file-invoice-dollar"></i>
                        </div>
                        <h3 className="service-title">{t("services.service1.title")}</h3>
                        <p className="service-text mb-4">{t("services.service1.description1")}</p>
                        <p className="service-text">{t("services.service1.description2")}</p>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card border-transparent hover:border-green-500">
                        <div className="service-icon text-green-500">
                        <i className="fas fa-piggy-bank"></i>
                        </div>
                        <h3 className="service-title">{t("services.service2.title")}</h3>
                        <p className="service-text mb-10">{t("services.service2.description1")}</p>
                        <p className="service-text">{t("services.service2.description2")}</p>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card border-transparent hover:border-blue-900">
                        <div className="service-icon" style={{ color: "#073D7F" }}>
                        <i className="fas fa-book"></i>
                        </div>
                        <h3 className="service-title">{t("services.service3.title")}</h3>
                        <p className="service-text mb-4">{t("services.service3.description1")}</p>
                        <p className="service-text">{t("services.service3.description2")}</p>
                    </div>

                </div>

            </div>
        </section>
    </>
  );
};

export default Services;