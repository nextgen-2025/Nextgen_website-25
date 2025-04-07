import React, { useState, useEffect } from "react";
import LeaderBanner from "../components/leadership/LeaderBanner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import Loader from "../components/loader/Loader";

const Leaderships = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <LeaderBanner />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Leaderships;
