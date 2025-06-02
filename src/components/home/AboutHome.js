import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCity,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "",
    city: "Navi Mumbai",
    area: "Ghansoli",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to appropriate page based on selected type
    switch (formData.type) {
      case "Dedicated Desk":
        navigate("/coworking");
        break;
      case "Private Cabins":
        navigate("/training");
        break;
      case "Training Room":
        navigate("/real-estate");
        break;
      case "Conference Room":
        navigate("/it-services");
        break;
      case "Meeting Room":
        navigate("/digital-marketing");
        break;
      default:
        // Default to co-working if no type selected
        navigate("/coworking");
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+919930365555", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 relative p-4">
      <div className="absolute inset-0 bg-opacity-20 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      <div className="container mx-auto px-14 max-w-[1400px] relative z-10 text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-4">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
              COMPREHENSIVE BUSINESS SOLUTIONS
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="text-teal-400">NextGen Infratech</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Experience our full suite of services including co-working spaces,
              IT solutions, digital marketing expertise, professional training,
              and real estate services - all designed to elevate your business
              in Navi Mumbai and beyond.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-white">
                  4k<span className="text-teal-400">+</span>
                </h3>
                <p className="text-gray-400 text-sm">Work Stations</p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-white">
                  25<span className="text-teal-400">+</span>
                </h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 flex-1 min-w-[150px]">
                <h3 className="text-3xl font-bold text-white">
                  7<span className="text-teal-400">+</span>
                </h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Find Your Ideal Services
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 py-4">
                <div className="space-y-4">
                  {/* Space Type */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">
                      Services
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    >
                      <option value="">Select Space Type</option>
                      <option value="Dedicated Desk">Co-Working Space</option>
                      <option value="Private Cabins">Training</option>
                      <option value="Training Room">Real Estate</option>
                      <option value="Conference Room">IT Sevices</option>
                      <option value="Meeting Room">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                >
                  Explore Services <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
