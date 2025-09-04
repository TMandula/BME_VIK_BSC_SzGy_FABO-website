import Particles from "./Particles";

const Hero = () => {
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
                    style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                    data-lang-de="FABO Buchhaltung"
                    data-lang-en="FABO Accounting">
                    FABO Buchhaltung
                </h1>
                <h2 className="font-semibold mb-8"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
                    data-lang-de="Ihr Partner für zuverlässige Finanzlösungen"
                    data-lang-en="Your Reliable Partner in Finance">
                    Ihr Partner für zuverlässige Finanzlösungen
                </h2>
                <p className="opacity-90 mb-16"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                    data-lang-de="Wir unterstützen deutsche Unternehmen mit präzisen und effizienten Buchhaltungs- und Controlling-Services. Ob einzelne Fachkräfte oder komplette Teams – wir entlasten Sie, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
                    data-lang-en="We support German companies with precise and efficient accounting and controlling services. Whether you need individual experts or a full team, we help you save time and focus on your core business.">
                    Wir bieten maßgeschneiderte Lösungen für Ihre Bedürfnisse.
                </p>
                <a href="#contact"
                    className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
                    data-lang-de="Kontakt"
                    data-lang-en="Contact">
                    Kontakt
                </a>
            </div>
        </section>
    </>
  );
};

export default Hero;