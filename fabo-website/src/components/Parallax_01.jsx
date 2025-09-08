import { useTranslation } from "react-i18next";

const Parallax_01 = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Parallax Section 1 - Deutsche Landschaft */}
            <section 
                className="relative h-[60vh] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/images/eric-weber--KPwl1VaSyw-unsplash.jpg')" }}
            >
                {/* Overlay div for opacity */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="h-full flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center">
                        {t("parallax_01.motto")}
                    </h2>
                </div>
            </section>
        </>
    );
}   
export default Parallax_01;