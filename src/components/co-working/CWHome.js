import React from "react";
import "./co-working.css";
import CWForm from "./CWForm";

const CWHome = ({ onSpaceFilter }) => {
  // Function to open WhatsApp with your number
  const openWhatsApp = () => {
    // The phone number from your footer - adding the "+" is important
    window.open("https://wa.me/+919930365555", '_blank');
  };

  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center w-full">
        <section
          id="home"
          className="landing-cw bg-fixed flex justify-center items-center w-full pt-24 lg:pt-0"
        >
          <div className="sec-body flex flex-col lg:flex-row justify-around items-center w-full px-4 md:px-8">
            <div className="sec-heading w-full lg:w-[50%] lg:mx-4 px-2 md:px-4">
              <h2 className="uppercase text-start text-[#00C89A] text-base sm:text-lg my-3 font-Manrope">
                We are #1 Cospace
              </h2>
              <h1 className="heading-banner text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight lg:leading-[65px] tracking-normal text-white">
                Smart Spaces,<span className="id-color"> Better Business </span> with
                <span className="id-color text-[#00C89A] mx-3 font-bold">
                  NextGen Infratech
                </span>
              </h1>

              <button 
                className="pulse-button mb-8"
                onClick={openWhatsApp}
              > 
                <i className="fa fa-whatsapp px-1"></i>Whatsapp us 
              </button>

              <p className="text-start text-base sm:text-lg leading-7 mb-5 font-light text-[#F8F9FA] max-w-2xl">
                Flexible, Modern, and Productive Co-working Spaces in the Heart
                of Navi Mumbai
              </p>

              <div className="row text-white flex flex-row justify-between items-center gap-4 w-full mt-10 sm:mt-20 hero-cnt">
                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.1s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-4xl sm:text-5xl lg:text-6xl">
                      <span>4k</span>+
                    </h3>
                    <h5 className="color-id text-sm sm:text-base">Work Stations Available</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.4s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-4xl sm:text-5xl lg:text-6xl">
                      <span>25</span>+
                    </h3>
                    <h5 className="color-id text-sm sm:text-base">Happy Customers</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight animated flex-1"
                  data-wow-delay="1.7s"
                >
                  <div className="">
                    <h3 className="row_h3 text-4xl sm:text-5xl lg:text-6xl">
                      <span>7</span>
                    </h3>
                    <h5 className="color-id text-sm sm:text-base">Year Experiences</h5>
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
