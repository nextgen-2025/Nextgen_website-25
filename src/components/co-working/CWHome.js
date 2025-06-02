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
    window.open("https://wa.me/+919930365555", '_blank');
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
                Smart Spaces,<span className="id-color"> Better Business </span> with
                <span className="id-color text-teal-400 mx-3 font-bold">
                  NextGen Infratech
                </span>
              </h1>

              <button 
                className="pulse-button mb-8"
                onClick={openWhatsApp}
              > 
                <i className="fa fa-whatsapp px-1"></i>Whatsapp us 
              </button>

              <p className="text-start text-sm sm:text-base font-semibold text-white md:text-base lg:text-lg leading-6 lg:leading-7 mb-5 max-w-2xl">
                Flexible, Modern, and Productive Co-working Spaces in the Heart
                of Navi Mumbai
              </p>

              <div className="row text-white flex flex-row justify-between items-center gap-4 w-full mt-10 sm:mt-16 hero-cnt">
                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.1s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
                      <span>4k</span>+
                    </h3>
                    <h5 className="color-id text-xs sm:text-sm">Work Stations Available</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.4s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
                      <span>25</span>+
                    </h3>
                    <h5 className="color-id text-xs sm:text-sm">Happy Customers</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.7s"
                >
                  <div className="">
                    <h3 className="row_h3 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl">
                      <span>7</span>
                    </h3>
                    <h5 className="color-id text-xs sm:text-sm">Year Experiences</h5>
                  </div>
                </div>
              </div>
            </div>

            <CWForm/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CWHome;
