import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/about/CTA";
import Loader from "../components/loader/Loader";
import TrainingBanner from "../components/training/Traning";
import TrainingSection from "../components/training/TrainingSection";
import TrainingPrograms from "../components/training/TrainingPrograms";

const Training = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <TrainingBanner />
            <div className="container mx-auto px-4 py-6">
              <TrainingPrograms />
              <TrainingSection />
            </div>
          </main>
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Training;
