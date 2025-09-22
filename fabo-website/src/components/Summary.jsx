import { useTranslation } from "react-i18next";

const Summary = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* SUMMARY ABOUT US */}
            <section id="summary" className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold">
                        {t("summary.title")}
                    </h2>
                    <p className="mt-3 text-slate-600">
                        {t("summary.description1")}
                    </p>
                    <p className="mt-3 text-slate-600">
                        {t("summary.description2")}
                    </p>
                    <ul className="mt-4 text-slate-700 list-disc pl-5">
                        <li><p>{t("summary.list.item1")}</p></li>
                        <li><p>{t("summary.list.item2")}</p></li>
                        <li><p>{t("summary.list.item3")}</p></li>
                    </ul>
                </div> 
                <img 
                    src="/images/summary-about-us.jpg" 
                    alt="Teamarbeit im Finanzwesen" 
                    className="w-full h-full object-contain rounded-2xl object-cover w-full h-72" 
                    loading="eager" />
                </div>
            </section>
        </>
    );
}

export default Summary;