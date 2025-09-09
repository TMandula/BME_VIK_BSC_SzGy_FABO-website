import Particles from "./Particles";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
        {/* HERO */}
        <section id="home" 
            className="relative flex items-center justify-center text-center text-white overflow-hidden min-h-screen bg-cover bg-center bg-[url('/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')]">

            {/* Particles layer */}
            <div id="heroParticles" 
                className="absolute inset-0 w-full h-full pointer-events-none z-20">
            </div>
            <Particles />

            {/* Content layer */}
            <div className="text-left max-w-4xl mx-auto px-4 z-30">
                <h1 className="font-extrabold leading-tight mb-2"
                    style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                    {t("hero.title")}
                </h1>
                <h2 className="font-semibold mb-8"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
                    {t("hero.subtitle")}
                </h2>
                <p className="opacity-90 mb-16"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                    {t("hero.prologue")}
                </p>
                <Link to="/contact" state={{ section: "contact" }}
                    className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-lg transition">
                    {t("hero.contactButton")}
                </Link>
            </div>
        </section>
    </>
  );
};

export default Hero;