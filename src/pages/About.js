import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import Footer from "../components/home/Footer";
import MissionVison from "../components/about/MissionVison";
import CTA from "../components/about/CTA";
import CompanyLeaders from "../components/about/CompanyLeaders";
import FullScreenImageSections from "../components/about/FullScreenImageSections";
import AboutBanner from "../components/about/AboutBanner";


const About = () => {


  return (
    <div >
      <>
          <Navbar />
          <AboutBanner />
          <AboutSection />
          <MissionVison />
          <CompanyLeaders />
          
          <FullScreenImageSections />
          
          <Footer />
        </>
    </div>
  );
};

export default About;
