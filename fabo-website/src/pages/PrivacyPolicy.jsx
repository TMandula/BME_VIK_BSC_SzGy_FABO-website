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
      
      {/* Content section */}
      <section id="privacy-policy" className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          We take the protection of your personal data very seriously. 
          This Privacy Policy explains what data we collect, how we use it, 
          and your rights regarding your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
        <p className="mb-4">We collect personal data only when necessary (e.g. contact forms).</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Usage</h2>
        <p className="mb-4">Your data will only be used to respond to inquiries and provide services.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Rights</h2>
        <p className="mb-4">
          You have the right to request information, correction, or deletion of your stored data.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          If you have any questions, please contact us.
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
