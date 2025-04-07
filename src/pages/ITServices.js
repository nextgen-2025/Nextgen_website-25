import React, { useState, useEffect } from "react";
import ITBanner from "../components/itservices/ITBanner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import Loader from "../components/loader/Loader";
import ITServicesCards from "../components/itservices/ITServicesCards";
import ITServicesSummury from "../components/itservices/ITServicesSummury";

const ITServices = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false); // Set loading to false when the video is loaded
  };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <ITBanner onVideoLoad={handleVideoLoad} />
          <ITServicesSummury />
          <ITServicesCards />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ITServices;
