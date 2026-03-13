import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { About } from "../pages/About";
import Admissions from "../pages/Admissions";
import Academics from "../pages/Academics";
// import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/academics" element={<Academics />} />
      {/* <Route path="/events" element={<Events />} /> */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
