import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <Link to="/" state={{ section: "home" }} id="siteLogo" className="flex items-center space-x-3">
        <span className="brand-main text-5xl tracking-wide flex items-center" style={{ fontFamily: "'DM Serif Text', serif", lineHeight: 1 }}>
            FABO
        </span>
        <span className="brand-main text-4xl font-bold tracking-wide flex items-center" style={{ fontFamily: "'DM Serif Text', serif", lineHeight: 1 }}>
            |
        </span>
        <div className="flex flex-col justify-center leading-[1.1] ml-2">
            <span className="brand-sub text-base font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("header.logo.accounting")}
            </span>
            <span className="brand-sub text-base font-semibold -mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("header.logo.services")}
            </span>
        </div>
    </Link>
  );
};

export default Logo;