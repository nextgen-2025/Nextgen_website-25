import React,{ useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import DMBanner from "../components/digital-marketing/DMBanner";
import DMSummmury from "../components/digital-marketing/DMSummmury";
import DMSevices from "../components/digital-marketing/DMSevices";

const ITServices = () => {
  const [setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      <>
        <Navbar />
        <DMBanner onVideoLoad={handleVideoLoad} />
        <DMSummmury />
        <DMSevices />
        <Footer />
      </>
    </div>
  );
};

export default ITServices;
