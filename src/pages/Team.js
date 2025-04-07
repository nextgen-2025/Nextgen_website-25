import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import TeamBanner from "../components/team/TeamBanner";
import TeamPicture from "../components/team/TeamPicture";
import Footer from "../components/home/Footer";
import CTA from "../components/about/CTA";
import TeamValues from "../components/team/TeamValues";
import Loader from "../components/loader/Loader";

const Team = () => {
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
          <TeamBanner />
          <TeamPicture />
          <TeamValues />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Team;
