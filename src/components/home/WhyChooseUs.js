import React from "react";
import "../customcss/chooseus.css";

const WhyChooseUs = () => {
  return (
    <div className="faq-bg relative bg-white md:px-20 pb-10 md:py-6 ">
      <div className="text-start text-[#28aa4a] font-thin mx-10 pt-10 md:pt-0 mb-10 ">
        <h1 className="text-[38px] lg:text-5xl font-extrabold mb-3 md:mb-0 text-center relative font-lato">
          Our Highlights
        </h1>
      </div>
      <div className="flex flex-col-reverse justify-center lg:flex-row">
        <div className="relative w-full lg:w-[65%] ">
          <div className="  text-white grid md:grid-cols-2">
            <div className="md:p-2 pt-5 md:pt-0 flex flex-col items-center md:items-start">
              <img
                src="./about/expertise_17378488.png"
                alt="expertise"
                width="90"
                className="md:pl-5"
              />
              <p className="text-justify px-5 text-base p-2 font-extralight">
                Our team of seasoned experts is dedicated to understanding your
                unique needs and delivering tailored solutions. With extensive
                industry knowledge, we tackle challenges head-on.
              </p>
            </div>
            <div className="md:p-2 pt-6 md:pt-0 flex flex-col items-center md:items-start ">
              <img
                src="./about/innovation_17034253.png"
                alt="innovation"
                width="90"
                className="md:pl-5"
              />
              <p className="text-justify px-5 text-base p-2 font-extralight ">
                We leverage cutting-edge technologies to create scalable,
                future-proof solutions that grow with your business, ensuring
                you stay ahead in a constantly evolving landscape.
              </p>
            </div>
            <div className="md:p-2 pt-6 md:pt-0 flex flex-col items-center md:items-start ">
              <img src="./about/centric.png" alt="centric" width="90" />
              <p className="text-justify px-5 text-base p-2 font-extralight">
                Building lasting partnerships is our priority, which is why we
                provide personalized support at every step. Your success is our
                mission, and we’re committed to attentive service
              </p>
            </div>
            <div className="md:p-2 flex flex-col items-center md:items-start">
              <img
                src="./about/chart_2064730.png"
                alt="centric"
                width="90"
                className="md:pl-5"
              />
              <p className="text-justify px-5 text-base p-2 font-extralight ">
                With a proven track record of delivering projects on time and
                within budget, we pride ourselves on reliability and excellence,
                consistently exceeding your expectations.
              </p>
            </div>
            {/* <div className="p-2 flex flex-col items-center">
              <img src="./about/chart_2064730.png" alt="chart" width="70" />
              <p className="text-justify">
                With a rich history of delivering successful projects on time
                and within budget, we take pride in our reliability. Our proven
                processes and commitment to excellence guarantee results that
                exceed your expectations.
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex justify-center">
          {/* <!-- Our FAQs Images Start --> */}
          <div className="our-faqs-images md:ml-5 mx-8 md:mx-0">
            <div className="our-faqs-images-row">
              <div className="">
                {/* <!-- FAQs Img Start --> */}
                <div className="faq-img faqs-img-1">
                  <figure className="image-anime reveal">
                    <img src="./faq/1.jpg" alt="" />
                  </figure>
                </div>
                {/* <!-- FAQs Img End --> */}
              </div>
              <div className="">
                {/* <!-- FAQs Img Start --> */}
                <div className="faq-img-1 faqs-img-2">
                  <figure className="image-anime reveal">
                    <img src="./faq/2.jpg" alt="" />
                  </figure>
                </div>
                {/* <!-- FAQs Img End --> */}
              </div>
            </div>

            <div className="flex items-start mt-3">
              <div className="">
                {/* <!-- FAQs Img Start --> */}
                <div className="faq-img faqs-img-1">
                  <figure className="image-anime reveal">
                    <img src="./faq/3.jpg" alt="" />
                  </figure>
                </div>
                {/* <!-- FAQs Img End --> */}
              </div>
              <div className="">
                {/* <!-- FAQs Img Start --> */}
                <div className="faq-img-1 faqs-img-2">
                  <figure className="image-anime reveal">
                    <img src="./faq/4.jpg" alt="" />
                  </figure>
                </div>
                {/* <!-- FAQs Img End --> */}
              </div>
            </div>

            <div className="our-faqs-bulitup">
              <img src="./faq/nextgen-profile-logo.jpg" alt="" />
            </div>
          </div>
          {/* <!-- Our FAQs Images End --> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
