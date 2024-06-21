import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App () {
  return (
    <div>
      <Navbar />
   <div className="container mt-24 mx-auto px-12 py-4">
   <HeroSection/>
   <Contact/>
 
     </div>
     <div>
     <Footer/>
     </div>
     </div>
  )
}

export default App;
