import React from "react";

const ITServicesSummury = () => {
  return (
    <div className="flex justify-between itser-summ my-5">
      <div className="flex flex-col items-start max-w-3xl p-6 lg:ml-20">
        <h2 className="text-3xl md:text-5xl font-thin text-[#28aa4a] mb-4 font-lato">
          IT Services Overview
        </h2>
        <p className="mb-6 text-justify lg:text-start text-lg font-light">
          At Nextgen Infratech Solutions, we deliver comprehensive IT services
          designed to boost your business's operational efficiency. Our Network
          Services ensure reliable connectivity, while our Server Management
          keeps your systems running smoothly. We specialize in Data Management
          to safeguard your critical information and implement robust Security
          Services to protect against cyber threats.
        </p>
        <p className="text-justify lg:text-start text-lg font-light">
          Our expert Web Development solutions are customized to enhance your
          online presence, and our dedicated 24/7 IT Support minimizes downtime
          and keeps your operations seamless. Whether you're a small startup or
          an established enterprise, our tailored IT services are geared towards
          driving your success.
        </p>

        <p className="mt-6 text-start text-lg font-light">
          Whether you’re a small startup or an established enterprise, our IT
          services are tailored to fit your needs and drive success.
        </p>
      </div>
    </div>
  );
};

export default ITServicesSummury;
