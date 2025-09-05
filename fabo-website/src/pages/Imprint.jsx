import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Imprint = () => {
  const location = useLocation();
  const section = location.state?.section;
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get dynamic header height
    const header = document.getElementById("mainHeader");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      const header = document.getElementById("mainHeader");
      if (header) setHeaderHeight(header.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
      if (section) {
          const el = document.getElementById(section);
          const header = document.getElementById("mainHeader");
          if (el) {
              const headerHeight = header.offsetHeight; // dynamic header height
              const elTop = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elTop - headerHeight, // offset by header height
                  behavior: "smooth"
              });
          }
      }
  }, [section]);

  return (
    <>
      {/* Hero-style header background */}
      <section
        id="imprint-hero"
        className="w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')",
          height: `${headerHeight}px`
        }}
      >
      </section>

      {/* Content section */}

      <section id="imprint-home" className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-3xl md:text-4xl font-bold mb-10"
          data-lang-de="Impressum"
          data-lang-en="Imprint"
        >
          Imprint
        </h1>
        <h2 className="mb-6"><strong 
          data-lang-de="FABO Accounting Gesellschaft mit beschränkter Haftung (FABO Accounting Kft.):" 
          data-lang-en="FABO Accounting Limited Liability Company (FABO Accounting Kft.):">FABO Accounting Limited Liability Company (FABO Accounting Kft.)</strong></h2>
        
        <p className="mb-2"><strong 
          data-lang-de="Steuernummer:" 
          data-lang-en="Tax Number:">Tax Number:</strong> 32235627-2-42</p>
        <p className="mb-2"><strong 
          data-lang-de="Handelsregisternummer:"
          data-lang-en="Company Registration Number:">Company Registration Number:</strong> 01-09-413452</p>
        <p className="mb-6"><strong
          data-lang-de="Umsatzsteuer-ID:"
          data-lang-en="EU VAT ID:">EU VAT ID:</strong> HU32235627</p>

        <p className="mb-2"><strong
          data-lang-de="Gründungsdatum:"
          data-lang-en="Date of establishment:">Date of establishment:</strong> 2023. 03. 08.</p>
        <p className="mb-2"><strong>Managing Director (Vertretungsberechtigter):</strong> Kaló Péter</p>
        <p className="mb-2">
          <strong
            data-lang-de="Tätigkeitsschlüssel:"
            data-lang-en="Activity code:">
            Activity code:
          </strong>{" "}
          <span
            data-lang-de="7020.25 - Unternehmensberatung und sonstige Managementberatung"
            data-lang-en="7020.25 - Business and other management consulting"
          >
            7020.25 - Business and other management consulting
          </span>
        </p>
        <p className="mb-6">
          <strong
            data-lang-de="Zuständige Aufsichtsbehörde:"
            data-lang-en="Supervisory Authority:">Supervisory Authority:</strong>{" "}
          <span
            data-lang-de="Firmenregistergericht Budapest"
            data-lang-en="Company Registry Court of Budapest"
          >
            Company Registry Court of Budapest
          </span>
        </p>

        
        <p className="text-sm text-gray-600">
          This website is operated by FABO Accounting & Services.
        </p>
      </section>
    </>
  );
};

export default Imprint;
