import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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

  return (
    <section
      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 relative py-12 sm:py-16 md:py-20"
      aria-label="About NextGen Infratech"
    >
      <div className="absolute inset-0 bg-opacity-20 bg-black z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="w-full lg:w-7/12 text-white text-left">
            <span
              className="inline-block text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide"
              role="text"
            >
              COMPLETE BUSINESS SOLUTIONS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Empower Your Growth with{" "}
              <span className="text-teal-400">NextGen Infratech</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Unlock your business potential with integrated solutions—coworking
              spaces, IT services, digital marketing, professional training, and
              real estate consulting. Based in Mahape, Navi Mumbai, we help
              startups and enterprises thrive with scalable infrastructure and
              expert support.
            </p>

            <div
              className="flex flex-wrap gap-2 mb-10"
              role="group"
              aria-label="Company Highlights"
            >
              {[
                { count: "4k", label: "Workstations" },
                { count: "25", label: "Happy Clients" },
                { count: "7", label: "Years of Experience" },
              ].map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-md border border-gray-600"
                  role="text"
                  aria-label={`${stat.count}+ ${stat.label}`}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {stat.count}
                    <span className="text-teal-400">+</span>
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Section - Form */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Get Started with the Right Service
              </h3>
              <form
                onSubmit={handleSubmit}
                className="w-full space-y-4 sm:space-y-5"
                role="form"
                aria-label="Service Selection Form"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="service-type"
                      className="block text-gray-300 mb-2 text-sm"
                    >
                      Select a Service
                    </label>
                    <select
                      id="service-type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                      aria-label="Select Service Type"
                    >
                      <option value="">-- Choose a Service --</option>
                      <option value="Coworking">Co-Working Spaces</option>
                      <option value="Training">Professional Training</option>
                      <option value="RealEstate">Real Estate Services</option>
                      <option value="ITServices">IT Services</option>
                      <option value="Marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                >
                  Explore Services <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
