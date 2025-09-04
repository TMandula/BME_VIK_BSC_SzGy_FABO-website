import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage"; // your existing homepage
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
