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
    <div>
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
