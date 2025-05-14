import React, { useState} from "react";
import Navbar from "../components/navbar/Navbar";
import CareerHome from "../components/Careers/CareerHome";
import Footer from "../components/home/Footer";
import CareerBanner from "../components/Careers/CareerBanner";
import CareerForm from "../components/Careers/CareerForm";
import JobOpening from "../components/Careers/JobOpening";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  return (
    <div>
      <>
        <Navbar />
        <CareerBanner />
        <CareerHome />
        <div className="border w-[90%] mx-auto my-10"></div>
        <div className="flex flex-col lg:flex-row items-start mx-5 lg:mx-10 pb-4">
          <JobOpening onApplyClick={handleApplyClick} />
          {selectedJob && <CareerForm selectedJob={selectedJob} />}
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Careers;
