import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallary";
import Contact from "./pages/Contact";
import Footer from "./assets/components/Footer";
import Navbarr from "./assets/components/Navbar";
import BirthdayParty from "./pages/birthdayparty";
import Anniversary from "./pages/anniversary";
import Marriage from "./pages/marrage";
import Engagement from "./pages/engagement";
import AllServices from "./pages/AllServices";
export default function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/birthdayparty" element={<BirthdayParty />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/allServices" element={<AllServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

