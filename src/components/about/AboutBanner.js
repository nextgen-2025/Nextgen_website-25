import React from "react";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div className="flex justify-center relative overflow-hidden w-full min-h-[500px] md:h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about/Aboutimage.jpeg"
          alt="About Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white flex flex-col justify-center items-center mx-auto py-10 md:py-0 md:mt-0 max-w-7xl px-3 sm:px-4">
        <span className="inline-block pt-2 sm:pt-4 text-teal-400 font-semibold text-sm sm:text-lg mb-3 sm:mb-4 tracking-wider uppercase border-b-2 border-teal-400 pb-1 sm:pb-2">
          ABOUT NEXTGEN INFRATECH
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 leading-tight text-center">
          Your Partner in
          <span className="text-teal-400 relative inline-block ml-2">
            Innovation
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </h1>
        <p className="text-gray-100 text-base sm:text-xl mb-6 sm:mb-10 mx-auto px-2 sm:px-20 leading-relaxed text-center">
          Transforming businesses through comprehensive IT infrastructure
          solutions and innovative workspace solutions
        </p>
        <Link
          to="/contact"
          className="drop-in-3 bg-teal-500 hover:bg-teal-600 px-6 sm:px-10 py-2.5 sm:py-3 mt-4 sm:mt-8 rounded-lg transition-all duration-300 text-white flex items-center gap-2 font-medium text-sm sm:text-base"
        >
          Get Started
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AboutBanner;
