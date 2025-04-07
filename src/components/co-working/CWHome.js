import React from "react";
import "./co-working.css";
import CWForm from "./CWForm";

const CWHome = () => {
  return (
    <div className="">
      <div className="flex items-center w-full">
        <section
          id="home"
          className="landing-cw bg-fixed flex justify-center items-center pt-24 lg:pt-0"
        >
          <div className="sec-body flex flex-col lg:flex-row justify-around items-center">
            <div className="sec-heading lg:w-[50%] lg:mx-4">
              <h2 className="uppercase text-start text-[#00C89A] text-lg my-3 font-Manrope">
                We are #1 Cospace
              </h2>
              <h1 className="heading-banner text-start text-6xl mb-5 leading-[65px] tracking-normal text-white">
                Upgrade Your <span className="id-color">Workspace</span> with
                <span className="id-color text-[#00C89A] mx-3 font-bold">
                  NextGen Infratech
                </span>
              </h1>
              <p className="text-start text-[18px] leading-7 mb-5 font-light text-[#F8F9FA]">
                Flexible, Modern, and Productive Co-working Spaces in the Heart
                of Navi Mumbai
              </p>

              <a
                href="https://wa.me/8169922745"
                target="_blank"
                rel="noreferrer"
                className="sec-btn button-ripple"
              >
                <span className="pulse-button">
                  <i className="fa fa-whatsapp px-1"></i>Whatsapp us
                </span>
              </a>

              <div className="row text-white flex items-center gap-10 mt-20 hero-cnt">
                <div
                  className="wow fadeInRight mb30 animated"
                  data-wow-delay="1.1s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-6xl">
                      <span>4k</span>+
                    </h3>
                    <h5 className="color-id ">Work Stations Available</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight mb30 animated"
                  data-wow-delay="1.4s"
                >
                  <div className="de_count text-left">
                    <h3 className="row_h3 text-6xl">
                      <span>25</span>+
                    </h3>
                    <h5 className="color-id">Happy Customers</h5>
                  </div>
                </div>

                <div
                  className="wow fadeInRight mb30 animated"
                  data-wow-delay="1.7s"
                >
                  <div className="">
                    <h3 className="row_h3 text-6xl">
                      <span>7</span>
                    </h3>
                    <h5 className="color-id">Year Experiences</h5>
                  </div>
                </div>
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
