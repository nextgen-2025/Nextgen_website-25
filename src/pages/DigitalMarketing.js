import React,{ useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import DMBanner from "../components/digital-marketing/DMBanner";
import DMSummmury from "../components/digital-marketing/DMSummmury";
import DMSevices from "../components/digital-marketing/DMSevices";
import { Helmet } from "react-helmet-async";

const ITServices = () => {
  const [setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      <>
        <Helmet>
          <title>Digital Marketing Services in Navi Mumbai | NextGen Infratech</title>
          <meta name="description" content="Boost your business with NextGen Infratech's digital marketing services in Mahape, Navi Mumbai. SEO, social media, PPC, content marketing, and more." />
        </Helmet>
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
