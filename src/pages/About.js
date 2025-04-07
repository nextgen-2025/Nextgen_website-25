import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/about/AboutSection";
import Footer from "../components/home/Footer";
import MissionVison from "../components/about/MissionVison";
import CTA from "../components/about/CTA";
import CompanyLeaders from "../components/about/CompanyLeaders";
import FullScreenImageSections from "../components/about/FullScreenImageSections";
import CompanyImages from "../components/about/CompanyImages";
import AboutBanner from "../components/about/AboutBanner";
import Loader from "../components/loader/Loader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <AboutBanner />
          <AboutSection />
          <MissionVison />
          <CompanyLeaders />
          <CompanyImages />
          <FullScreenImageSections />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
