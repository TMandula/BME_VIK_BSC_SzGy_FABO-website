import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
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
        id="privacy-policy-hero"
        className="w-full bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/shakti-rajpurohit-ggs-47SjYy0-unsplash.jpg')",
          height: `${headerHeight}px`
        }}
      >
      </section>
      
      {/* Content Section */}
      <section id="privacy-policy" className="max-w-3xl mx-auto px-6 py-16 space-y-4">
        <h1 className="text-3xl font-bold mb-10"
          data-lang-de="Datenschutzerklärung"
          data-lang-en="Privacy Policy"
        >
          Datenschutzerklärung
        </h1>

        {/* Responsible Body */}
        <h2 className="text-xl font-semibold"
          data-lang-de="1. Verantwortlicher"
          data-lang-en="1. Responsible Body"
        >
          1. Verantwortlicher
        </h2>
        <ul className="mb-10 ml-6 space-y-2">
          <li>FABO Accounting GmbH</li>
          <li>Nagy Lajos király útja 86.C.</li>
          <li>1148 Budapest</li>
          <li data-lang-de="Ungarn" data-lang-en="Hungary">Ungarn</li>
          <li>
            <a href="mailto:fabobudapest@gmail.com" 
              className="mb-4 hover:text-blue-600 hover:underline">
              fabobudapest@gmail.com
            </a>
          </li>
        </ul>
        

        {/* Data Collection */}
        <h2 className="text-xl font-semibold"
          data-lang-de="2. Datenerhebung und Nutzung"
          data-lang-en="2. Data Collection and Use"
        >
          2. Datenerhebung und Nutzung
        </h2>
        <p data-lang-de="Wir erheben personenbezogene Daten nur, wenn dies erforderlich ist, z.B. über Kontaktformulare."
           data-lang-en="We collect personal data only when necessary, e.g., via contact forms."
           className="mb-10"
        >
          Wir erheben personenbezogene Daten nur, wenn dies erforderlich ist, z.B. über Kontaktformulare.
        </p>

        {/* Legal Basis */}
        <h2 className="text-xl font-semibold"
          data-lang-de="3. Rechtsgrundlagen"
          data-lang-en="3. Legal Basis"
        >
          3. Rechtsgrundlagen
        </h2>
        <p data-lang-de="Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der DSGVO (Art. 6 Abs. 1 lit. a–f) und des TMG."
           data-lang-en="The processing of your data is based on GDPR (Art. 6 para. 1 lit. a–f) and the German TMG."
           className="mb-10"
        >
          Die Verarbeitung Ihrer Daten erfolgt auf Grundlage der DSGVO (Art. 6 Abs. 1 lit. a–f) und des TMG.
        </p>

        {/* User Rights */}
        <h2 className="text-xl font-semibold"
          data-lang-de="4. Rechte der Nutzer"
          data-lang-en="4. User Rights"
        >
          4. Rechte der Nutzer
        </h2>
        <ul className="list-disc ml-6 space-y-2 mb-10">
          <li data-lang-de="Auskunft über gespeicherte Daten"
              data-lang-en="Right to information about stored data"
          >
            Auskunft über gespeicherte Daten
          </li>
          <li data-lang-de="Berichtigung oder Löschung von Daten"
              data-lang-en="Right to correction or deletion of data"
          >
            Berichtigung oder Löschung von Daten
          </li>
          <li data-lang-de="Einschränkung der Verarbeitung oder Widerspruch"
              data-lang-en="Right to restriction or objection of processing"
          >
            Einschränkung der Verarbeitung oder Widerspruch
          </li>
          <li data-lang-de="Datenübertragbarkeit"
              data-lang-en="Right to data portability"
          >
            Datenübertragbarkeit
          </li>
          <li data-lang-de="Beschwerderecht bei Aufsichtsbehörde"
              data-lang-en="Right to complain to supervisory authority"
          >
            Beschwerderecht bei Aufsichtsbehörde
          </li>
        </ul>

        {/* Contact */}
        <h2 className="text-xl font-semibold"
          data-lang-de="5. Kontakt für Datenschutzanfragen"
          data-lang-en="5. Contact for Privacy Concerns"
        >
          5. Kontakt für Datenschutzanfragen
        </h2>
        <p data-lang-de="Bei Fragen wenden Sie sich bitte an info@fabo.de"
           data-lang-en="If you have any questions, please contact info@fabo.de"
        >
          Bei Fragen wenden Sie sich bitte an info@fabo.de
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
