import React, { useState} from "react";
import ITBanner from "../components/itservices/ITBanner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import ITServicesCards from "../components/itservices/ITServicesCards";
import ITServicesSummury from "../components/itservices/ITServicesSummury";

const ITServices = () => {
  const [setIsLoading] = useState(true);

  

  const handleVideoLoad = () => {
    setIsLoading(false); // Set loading to false when the video is loaded
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      
        <>
          <Navbar />
          <ITBanner onVideoLoad={handleVideoLoad} />
          <ITServicesSummury />
          <ITServicesCards />
          <Footer />
        </>
    </div>
  );
};

export default ITServices;
