import HeroSection from "../../components/HeroSection";
import Contact from "../Contact";
import Footer from "../../components/Footer";

const Home = () => {

    return (
        <>
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection/>
            <Contact/>
        </div>
        <div>
            <Footer/>
        </div>
     </>
    )

}

export default Home;