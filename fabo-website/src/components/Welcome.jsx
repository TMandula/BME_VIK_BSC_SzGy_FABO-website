import { useTranslation } from "react-i18next";

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* WELCOME TEXT SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold mb-10">
                        {t("welcome.greeting")}
                    </h2>
                    <p className="text-lg font-bold leading-relaxed mb-2">
                        {t("welcome.about")}
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        {t("welcome.goal")}
                    </p>
                    <p className="text-lg leading-relaxed">
                        {t("welcome.discover")}
                    </p>
                </div>
            </section>
        </>
    );
};

export default Welcome;
