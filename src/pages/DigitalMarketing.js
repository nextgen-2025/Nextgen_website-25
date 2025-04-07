import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import Loader from "../components/loader/Loader";
import DMBanner from "../components/digital-marketing/DMBanner";
import DMSummmury from "../components/digital-marketing/DMSummmury";
import DMSevices from "../components/digital-marketing/DMSevices";

const ITServices = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <DMBanner onVideoLoad={handleVideoLoad} />
          <DMSummmury />
          <DMSevices />
          <Footer />
        </>
      )}
    </div>
  );
};

export default ITServices;
