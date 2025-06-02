import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCity,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const openWhatsApp = () => {
    window.open("https://wa.me/+919930365555", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 relative p-8">
      <div className="absolute inset-0 bg-opacity-20 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-white max-w-[600px] text-left p-4">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
              PREMIUM CO-WORKING SPACES
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Elevate Your Work Experience with{" "}
              <span className="text-teal-400">NextGen Infratech</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Discover flexible, modern, and productive co-working spaces
              designed for professionals, startups, and enterprises in the heart
              of Navi Mumbai.
            </p>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp size={20} />
              Contact Us
            </button>
          </div>

          {/* Right Images Section */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="./space-cards/c1.jpg"
                alt="Modern Coworking Space"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-1">
                <img
                  src="./space-cards/Private Office.webp"
                  alt="Private Office Space"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-1">
                <img
                  src="./space-cards/Training Room.webp"
                  alt="Training Room"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
