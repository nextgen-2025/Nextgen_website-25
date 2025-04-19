import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/about/CTA";
import Loader from "../components/loader/Loader";
import TrainingBanner from "../components/training/Traning";
import TrainingSection from "../components/training/TrainingSection";

const Training = () => {
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
          <TrainingBanner />
          <TrainingSection />
         
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Training;
