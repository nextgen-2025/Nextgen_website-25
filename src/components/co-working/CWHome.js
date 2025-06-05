import React, { useEffect } from "react";
import "./co-working.css";
import CWForm from "./CWForm";

const CWHome = ({ onSpaceFilter }) => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to open WhatsApp with your number
  const openWhatsApp = () => {
    // The phone number from your footer - adding the "+" is important
    window.open("https://wa.me/+919930365555", "_blank");
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="flex items-center w-full">
        <section
          id="home"
          className="landing-cw bg-fixed flex justify-center items-center w-full pt-24 lg:pt-0"
        >
          <div className="sec-body flex flex-col lg:flex-row justify-around items-center w-full px-4 md:px-8">
            <div className="sec-heading w-full lg:w-[50%] lg:mx-4 px-2 md:px-4">
              <h2 className="uppercase text-start text-teal-400 font-bold text-base sm:text-lg my-3 mt-6 md:mt-10 lg:mt-14">
                We are #1 Co-space
              </h2>
              <h1 className="heading-banner text-start text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl mb-5 leading-tight lg:leading-[55px] tracking-normal text-white">
                Smart Spaces,<span className="id-color"> Better Business </span>{" "}
                with
                <span className="id-color text-teal-400 mx-3 font-bold">
                  NextGen Infratech
                </span>
              </h1>

              <button className="pulse-button mb-8" onClick={openWhatsApp}>
                <i className="fa fa-whatsapp px-1"></i>Whatsapp us
              </button>

              <p className="text-start text-sm sm:text-base font-semibold text-white md:text-base lg:text-lg leading-6 lg:leading-7 mb-5 max-w-2xl">
                Flexible, Modern, and Productive Co-working Spaces in the Heart
                of Navi Mumbai
              </p>

              <div
                className="flex flex-wrap gap-2 mb-10"
                role="group"
                aria-label="Company Highlights"
              >
                {[
                  { count: "4k", label: "Workstations" },
                  { count: "25", label: "Happy Clients" },
                  { count: "7", label: "Years of Experience" },
                ].map((stat, index) => (
                  <div
                    key={`stat-${index}`}
                    className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-md border border-gray-600"
                    role="text"
                    aria-label={`${stat.count}+ ${stat.label}`}
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {stat.count}
                      <span className="text-teal-400">+</span>
                    </h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <CWForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CWHome;
