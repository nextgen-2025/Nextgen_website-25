import React from "react";
import "./digital-marketing.css";
import { Link } from "react-router-dom";

const DMSummmury = () => {
  return (
      <div className="flex justify-center text-white py-12 ">
      <div className="flex flex-col items-center px-8">
        <h2 className="text-3xl text-teal-300 md:text-5xl font-semibold mb-4">
            Digital Marketing
          </h2>
          <p className="text-md lg:text-xl text-gray-300 mb-6">
              Digital Marketing That Delivers Results Nextgen Infratech
              Solutions offers ROI-driven digital marketing services to boost
              your online presence. Our expertise spans SEO for higher
              visibility, PPC for instant traffic, and Social Media Marketing to
              grow your brand. We craft impactful content, run targeted email
              campaigns, and provide data-driven insights to refine your
              strategy and maximize performance.
            </p>

          <Link
            to="/contact"
            className=" drop-in-3 btn-dm flex items-center justify-center w-fit bg-teal-500 px-5 py-2 md:py-2 mt-5 rounded-3xl"
          >
            <span className="hover-text1">Be a Part of Team</span>
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
  );
};

export default DMSummmury;
