import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";
import HomePage from "./pages/HomePage";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from "./components/Header/Header";

import { Suspense, lazy } from "react";

const Imprint = lazy(() => import("./pages/Imprint"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Wrapper to handle language reapply on route change
function LanguageSyncWrapper({ children }) {
  const location = useLocation();

  useDocumentTitle("home.title");

  useEffect(() => {
    const saved = localStorage.getItem("siteLang") || "de";
    if (typeof window.setLanguage === "function") {
      window.setLanguage(saved);
    }
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <Router>
      <Header />
      <LanguageSyncWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage section="about" />} />
        <Route path="/services" element={<HomePage section="services" />} />
        <Route path="/technologies" element={<HomePage section="technologies" />} />
        <Route path="/contact" element={<HomePage section="contact" />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      </LanguageSyncWrapper>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
