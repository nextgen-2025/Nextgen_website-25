import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import CWHome from "../components/co-working/CWHome";
import SpaceCards from "../components/co-working/SpaceCards";
import Process from "../components/co-working/Process";
import WhyChooseUsWorking from "../components/co-working/WhyChooseUsWorking";
import TestimonialsCW from "../components/co-working/TestimonialsCW";
import FAQS from "../components/co-working/FAQS";
import ClientsCW from "../components/co-working/ClientsCW";
import HotProperties from "../components/co-working/HotProperties";

const CoWorkingSpace = () => {
  const [filteredSpaces, setFilteredSpaces] = useState([]);

  const handleSpaceFilter = (spaces) => {
    setFilteredSpaces(spaces);
  };

  return (
    <div>
      <Navbar />
      <CWHome onSpaceFilter={handleSpaceFilter} />
      <HotProperties />
      <SpaceCards filteredSpaces={filteredSpaces} />
      <Process />
      <WhyChooseUsWorking />
      <TestimonialsCW />
      <FAQS />
      <ClientsCW />
      <Footer />
    </div>
  );
};

export default CoWorkingSpace;
