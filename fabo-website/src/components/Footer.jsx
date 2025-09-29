import { Link } from "react-router-dom";

import Menu from "./Navigation/Menu";

import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* FOOTER */}
            <footer className="bg-slate-900 text-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
                    {/* Company */}
                    <div>
                        <div className="text-xl font-extrabold text-white">
                            {t("footer.company")}
                        </div>
                        <p className="mt-3 text-slate-400 text-sm">{t("footer.cities")}</p>
                    </div>
                    {/* Locations */}
                    <nav className="space-y-2">
                        <div className="font-semibold text-white">{t("footer.locations.title")}</div>
                        <p className="mt-3 text-slate-400 text-sm">{t("footer.locations.Budapest")}</p>
                        <p className="mt-3 text-slate-400 text-sm">{t("footer.locations.Miskolc")}</p>
                    </nav>
                    {/* Menu */}
                    <nav className="space-y-2">
                        <div className="font-semibold text-white">{t("footer.menu.title")}</div>
                        <Menu variant="footer" />
                    </nav>
                    {/* Conatct */}
                    <div className="space-y-2">
                        <div className="font-semibold text-white">{t("footer.contact.title")}</div>
                        <a href={`mailto:${t("footer.contact.email")}`} 
                            className="text-slate-400 text-sm hover:text-white">
                            {t("footer.contact.emailName")}
                        </a><br />
                        <a href={`tel:${t("footer.contact.phone")}`} 
                            className="text-slate-400 text-sm hover:text-white">
                            {t("footer.contact.phoneName")}
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-400 flex items-center justify-between">
                    {/* RIGHTS FOOTER */}
                    <p>&copy; {new Date().getFullYear()} {t("footer.company")}</p>
                    <div className="flex space-x-4">
                        {/* Imprint */}
                        <Link to="/imprint" state={{ section: "imprint-home" }}
                            className="hover:text-white">
                            {t("footer.menu.imprint")}
                        </Link>
                        {/* PeivacyPolicy */}
                        <Link to="/privacy-policy" state={{ section: "privacy-policy" }}
                            className="hover:text-white">
                            {t("footer.menu.privacy")}
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer