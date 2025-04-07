import React from "react";
import expertise from "../../assets/about/expertise_17378488.png";
import Innovation from "../../assets/about/innovation_17034253.png";
import Centric from "../../assets/about/centric.png";
import Chart from "../../assets/about/chart_2064730.png";

const WhyUs = () => {
  return (
    <div>
      {/* <!-- why choose us --> */}
      <div className="why-choose-us-cnt">
        <div className="">
          <figure
            className="relative flex flex-col justify-center items-center 
                        rounded-full h-[450px] w-[450px] 
                        text-white text-[24px] font-bold text-center leading-[1.2] 
                        shadow-[5px_5px_15px_rgba(0,0,0,0.3)]"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #b4e1b5, #b7e3b8, #b7e5b9, #b8e7ba, #b8e9bb, #a6e4a2, #97df93, #8ade8a, #7cd77d, #6bcf70c4, #5bbf67d7)",
            }}
          >
            <div className="w-full text-black px-[70px] ml-10">
              <h2 className="font-semibold">
                Why Choose Us for Your IT Company
              </h2>

              <p className="font-normal text-base my-5 text-center text-[#00000]">
                Our team brings over a decade of experience in delivering
                innovative technology solutions tailored to your business needs.
              </p>
            </div>
          </figure>

          <figure
            className="relative bottom-[350px] right-[150px] flex justify-center items-center 
                        bg-gradient-to-tr from-[#6bd178] to-[#70d57e] 
                        rounded-full h-[250px] w-[250px] 
                        text-white text-3xl font-bold text-center leading-[1.2] 
                        shadow-[5px_5px_15px_rgba(0,0,0,0.3)]"
          >
            Why Choose Us
          </figure>
        </div>
        <div className="wcu-icon-txt-cnt">
          <div className="small-circle-cnt">
            <div className="small-container small-container-1">
              <figure className="small-circle sm-1">
                <img src={expertise} alt="Expertise" width="45px" />
              </figure>
              <div className="why-choose-us-text-cnt why-choose-us-text-cnt-1">
                <span className="left-border-whu"></span>
                <p className="left-text-whu">
                  Experienced professionals providing tailored solutions for
                  your needs.
                </p>
              </div>
            </div>
            <div className="small-container small-container-2">
              <figure className="small-circle sm-2">
                <img src={Innovation} alt="Innovation" width="45px" />
              </figure>
              <div className="why-choose-us-text-cnt why-choose-us-text-cnt-2">
                <span className="left-border-whu"></span>
                <p className="left-text-whu whu-2">
                  Utilizing innovative technologies for scalable, future-proof
                  solutions.
                </p>
              </div>
            </div>
            <div className="small-container small-container-3">
              <figure className="small-circle sm-3">
                <img src={Centric} alt="Centric" width="95px" />
              </figure>
              <div className="why-choose-us-text-cnt why-choose-us-text-cnt-3">
                <span className="left-border-whu"></span>
                <p className="left-text-whu whu-3">
                  Your success is our priority; we provide personalized support.
                </p>
              </div>
            </div>
            <div className="small-container small-container-4">
              <figure className="small-circle sm-4">
                <img src={Chart} alt="Chart" width="45px" />
              </figure>
              <div className="why-choose-us-text-cnt why-choose-us-text-cnt-4">
                <span className="left-border-whu"></span>
                <p className="left-text-whu whu-4">
                  A history of successful projects delivered on time and budget.
                </p>
              </div>
            </div>
          </div>

          <div className="whychoose-cnt"></div>
        </div>
      </div>
      {/* <!-- why choose us --> */}
    </div>
  );
};

export default WhyUs;
