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
        <h1 className="text-3xl font-bold mb-6">Imprint</h1>

        <p className="mb-4">
          <strong>FABO Accounting Limited Liability Company</strong>
        </p>
        <p className="mb-2">Tax number: 32235627-2-42</p>
        <p className="mb-2">Company registration number: 01-09-413452</p>
        <p className="mb-2">Date of establishment: 2023. 03. 10.</p>
        <p className="mb-2">Activity code: 7020 - Business and other management consulting</p>

        <p className="mt-6 text-sm text-gray-600">
          This website is operated by FABO Accounting & Services.
        </p>
      </section>
    </>
  );
};

export default Imprint;
