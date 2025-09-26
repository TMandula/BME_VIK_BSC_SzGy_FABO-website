import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Menu = ({ variant = "desktop"}) => {
    const { t } = useTranslation();

    const links = [
        { to: "/", section: "home", label: t("header.menu.home") },
        { to: "/about", section: "about", label: t("header.menu.about") },
        { to: "/services", section: "services", label: t("header.menu.services") },
        { to: "/technologies", section: "technologies", label: t("header.menu.technologies") },
        { to: "/contact", section: "contact", label: t("header.menu.contact") },
    ];

    const variantClasses = {
        desktop: "nav-link",
        mobile: "py-2 border-b border-gray-200 hover:text-blue-500 text-black",
        footer: "block w-max min-w-[16ch] text-slate-400 hover:text-white",
    }

    return (
        <>
            {links.map(({ to, section, label }) => (
                <Link
                    key={section}
                    to={to}
                    state={{ section }}
                    className={variantClasses[variant]}
                >
                    {label}
                </Link>
            ))}
        </>
    );
};

export default Menu;