import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import Loader from "../components/loader/Loader";
import REBanner from "../components/real-estate/REBanner";
import REAbout from "../components/real-estate/REAbout";
import { REHistory } from "../components/real-estate/REHistory";
import REServices from "../components/real-estate/REServices";
import REProjects from "../components/real-estate/REProjects";
import ContactFrom from "../components/home/ContactFrom";

const RealEstate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // const handleVideoLoad = () => {
  //   setIsLoading(false);
  // };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <REBanner />
          <REHistory />
          <REAbout />
          <REServices />
          <REProjects />
          <ContactFrom />
          <Footer />
        </>
      )}
    </div>
  );
};

export default RealEstate;
