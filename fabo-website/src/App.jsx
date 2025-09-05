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
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
