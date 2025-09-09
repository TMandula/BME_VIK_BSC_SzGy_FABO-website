import { useTranslation } from "react-i18next";

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <>  
            {/* TECHNOLOGIES */}
            <section id="technologies" className="bg-white py-16 px-4 max-w-5xl mx-auto">
                <div className="max-w-7xl mx-auto text-center">
                
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">
                    {t("technologies.title")}
                </h2>
                
                {/* Intro */}
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    {t("technologies.description")}
                </p>

                {/* Technology Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Software 1 - Business Central */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#0FE0F2]">
                            <i className="fas fa-cogs text-[#0FE0F2] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">
                            {t("technologies.software1")}
                        </p>
                    </div>

                    {/* Software 2 - Datev */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#90d034]">
                            <i className="fas fa-file-invoice text-[#90d034] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">
                            {t("technologies.software2")}
                        </p>
                    </div>

                    {/* Software 3 - Lexware */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#ff4654]">
                            <i className="fas fa-chart-line text-[#ff4654] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">
                            {t("technologies.software3")}
                        </p>
                    </div>

                    {/* Software 4 - SAP Hana */}
                    <div className="flex flex-col items-center">
                        <div className="tech-tile  border-2 border-gray-300 p-6 mb-6 hover:border-[#1c5cbc]">
                            <i className="fas fa-database text-[#1c5cbc] text-6xl"></i>
                        </div>
                        <p className="text-blue-900 font-semibold">
                            {t("technologies.software4")}
                        </p>
                    </div>

                </div>

                {/* Disclaimer */}
                <p className="mt-12 text-gray-500 text-sm max-w-3xl mx-auto">
                    {t("technologies.disclaimer")}
                </p>
                </div>
            </section>
        </>
    );
}

export default Technologies;