import React from "react";
import "./digital-marketing.css";
import { Link } from "react-router-dom";

const DMSummmury = () => {
  return (
    <div>
      <div className="flex justify-center dmser-summ my-5">
        <div className="flex flex-col items-center max-w-3xl p-3 ">
          <h2 className="text-5xl font-thin text-[#28aa4a] mb-4 font-Manrope">
            Digital Marketing
          </h2>
          <div className="lg:mx-8">
            <p className="mb-6 text-lg font-light text-justify">
              At Nextgen Infratech Solutions, we offer a range of digital
              marketing services to enhance your business's online presence. Our
              Search Engine Optimization (SEO) strategies ensure improved
              visibility and higher rankings, while our targeted Pay-Per-Click
              (PPC) advertising drives immediate traffic and results. With
              engaging Social Media Marketing, we foster connections and build
              community around your brand.
            </p>
            <p className="text-justify text-lg font-light">
              Our Content Marketing services focus on creating valuable content
              to attract and retain customers, aligning with their interests and
              needs. We provide effective Email Marketing campaigns to nurture
              leads and enhance customer loyalty through personalized
              communication. Additionally, our Analytics and Reporting services
              deliver insights to optimize your marketing strategies and measure
              success.
            </p>
          </div>

          <Link
            to="/contact"
            className=" drop-in-3 btn-dm flex items-center justify-center w-fit bg-[#24aa4a] px-5 py-2 md:py-2 mt-5 rounded-3xl"
          >
            <span className="hover-text1 font-Manrope">Be a Part of Team</span>
            <svg
              version="1.1"
              id="icons_1_"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 128 128"
              width="20"
              fill="white"
              className="ml-2"
            >
              <g id="row1_1_">
                <g id="_x31__3_">
                  <path
                    className="st2"
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"
                    id="_x32__2_"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DMSummmury;
