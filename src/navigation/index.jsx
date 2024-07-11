import Navbar from "../components/NavBar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import News from "../pages/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
