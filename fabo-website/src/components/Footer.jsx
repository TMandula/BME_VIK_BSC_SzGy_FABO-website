import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* FOOTER */}
            <footer className="bg-slate-900 text-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-xl font-extrabold text-white">
                            {t("footer.company")}
                        </div>
                        <p className="mt-3 text-slate-400 text-sm">{t("footer.cities")}</p>
                    </div>
                    <nav className="space-y-2">
                        <div className="font-semibold text-white">{t("common.company.locations.title")}</div>
                        <p className="mt-3 text-slate-400 text-sm">{t("common.company.locations.Budapest")}</p>
                        <p className="mt-3 text-slate-400 text-sm">{t("common.company.locations.Miskolc")}</p>
                    </nav>
                    <nav className="space-y-2">
                        <div className="font-semibold text-white">{t("common.menu.title")}</div>
                        <Link to="/" state={{ section: "home" }} 
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white">
                            {t("common.menu.home")}
                        </Link>
                        <Link to="/about" state={{ section: "about" }}
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white">
                            {t("common.menu.about")}
                        </Link>
                        <Link to="/services" state={{ section: "services" }}
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white">
                            {t("common.menu.services")}
                        </Link>
                        <Link to="/technologies" state={{ section: "technologies" }}
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white">
                            {t("common.menu.technologies")}
                        </Link>
                        <Link to="/contact" state={{ section: "contact" }}
                            className="block w-max min-w-[16ch] text-slate-400 hover:text-white">
                            {t("common.menu.contact")}
                        </Link>
                    </nav>
                    <div className="space-y-2">
                        <div className="font-semibold text-white">{t("common.menu.contact")}</div>
                        <a href="mailto:fabobudapest@gmail.com" 
                            className="text-slate-400 text-sm hover:text-white">
                            {t("common.info.email.value")}
                        </a><br />
                        <a href="tel:+49123456789" 
                            className="text-slate-400 text-sm hover:text-white">
                            {t("common.info.phone.value")}
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-400 flex items-center justify-between">
                    <p>&copy; {new Date().getFullYear()} {t("footer.company")}</p>
                    <div className="flex space-x-4">
                        <Link to="/imprint" state={{ section: "imprint-home" }}
                            className="hover:text-white">
                            {t("imprint.title")}
                        </Link>
                        <Link to="/privacy-policy" state={{ section: "privacy-policy" }}
                            className="hover:text-white">
                            {t("privacy.title")}
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer