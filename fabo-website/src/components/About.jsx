import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* About Us Section */}
            <section id="about" className="max-w-4xl mx-auto px-6 py-16">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        {t("about.title")}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t("about.description")}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {t("about.experiences")}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {t("about.valuableness")}
                    </p>
                </div>
            </section>
        </>
    )
}

export default About;