import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ variant = "header", className = "" }) => {
    const { i18n } = useTranslation();

    // Define variant styles
    const variantClasses = {
        desktop: "flex items-center ml-4",
        mobile: "flex items-center mb-8 text-black",
    };

    return (
        <ul className={`lang-switch ${variantClasses[variant] || ""} ${className}`} role="list">
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