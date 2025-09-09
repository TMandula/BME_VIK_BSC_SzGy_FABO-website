import { useTranslation } from "react-i18next";

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ">
                    
                    {/* Service 1 - AP/AR */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-500">
                        {/* Icon */}
                        <div className="text-blue-500 text-5xl mb-4">
                            <i className="fas fa-file-invoice-dollar"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6">
                            {t("services.service1.title")}
                        </h3>
                        <p className="text-gray-600 text-left mb-4">
                            {t("services.service1.description1")}
                        </p>
                        <p className="text-gray-600 text-left">
                            {t("services.service1.description2")}
                        </p>
                    </div>

                    {/* Service 2 - Treasury */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-green-500">
                        {/* Icon */}
                        <div className="text-green-500 text-5xl mb-4">
                            <i className="fas fa-piggy-bank"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6">
                            {t("services.service2.title")}
                        </h3>
                        <p className="text-gray-600 mb-10 text-left">
                            {t("services.service2.description1")}
                        </p>
                        <p className="text-gray-600 text-left">
                            {t("services.service2.description2")}
                        </p>
                    </div>

                    {/* Service 3 - Hauptbuchhaltung */}
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-blue-900">
                        {/* Icon */}
                        <div className="text-blue-900 text-5xl mb-4" style={{ color: "#073D7F" }}>
                            <i className="fas fa-book"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-6">
                            {t("services.service3.title")}
                        </h3>
                        <p className="text-gray-600 mb-4 text-left">
                            {t("services.service3.description1")}
                        </p>
                        <p className="text-gray-600 text-left">
                            {t("services.service3.description2")}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </>
  );
};

export default Services;