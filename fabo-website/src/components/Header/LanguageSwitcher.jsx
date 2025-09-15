import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ className = "" }) => {
    const { i18n } = useTranslation();

    return (
        <ul className={`lang-switch ${className}`} role="list">
            <li>
                <button type="button" className="lang-btn px-1 py-0.5" 
                    onClick={() => i18n.changeLanguage("de")}
                    aria-current={i18n.language === "de" ? "true" : "false"}>
                    DE
                </button>
            </li>
            <li aria-hidden="true" className="px-1 lang-divider">
                |
            </li>
            <li>
                <button type="button" className="lang-btn px-1 py-0.5" 
                    onClick={() => i18n.changeLanguage("en")}
                    aria-current={i18n.language === "en" ? "true" : "false"}>
                    EN
                </button>
            </li>
        </ul>
    );
};

export default LanguageSwitcher;