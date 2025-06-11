import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import Footer from "../components/home/Footer";
import MissionVison from "../components/about/MissionVison";
import CompanyLeaders from "../components/about/CompanyLeaders";
import FullScreenImageSections from "../components/about/FullScreenImageSections";
import AboutBanner from "../components/about/AboutBanner";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About NextGen Infratech | Our Mission, Vision & Team</title>
        <meta name="description" content="Learn about NextGen Infratech's mission, vision, leadership, and our commitment to innovation and excellence in Mahape, Navi Mumbai." />
      </Helmet>
      <Navbar />
      <AboutBanner />
      <AboutSection />
      <MissionVison />
      <CompanyLeaders />
      <FullScreenImageSections />
      <Footer />
    </>
  );
};

export default About;
