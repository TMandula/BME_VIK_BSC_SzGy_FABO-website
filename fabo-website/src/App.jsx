import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage section="about" />} />
        <Route path="/services" element={<HomePage section="services" />} />
        <Route path="/technologies" element={<HomePage section="technologies" />} />
        <Route path="/contact" element={<HomePage section="contact" />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
