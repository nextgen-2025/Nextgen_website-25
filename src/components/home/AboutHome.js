import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const About = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    city: "Navi Mumbai",
    area: "Ghansoli",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // First submit the form data to the API
      await axios.post("https://nextgen-backend-2025-production-f2de.up.railway.app/api/inquiry", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.type,
        city: formData.city,
        area: formData.area
      });

      // Then navigate based on the selected service
      switch (formData.type) {
        case "Coworking":
          navigate("/coworking");
          break;
        case "Training":
          navigate("/training");
          break;
        case "RealEstate":
          navigate("/real-estate");
          break;
        case "ITServices":
          navigate("/it-services");
          break;
        case "Marketing":
          navigate("/digital-marketing");
          break;
        default:
          navigate("/coworking");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
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
              className="inline-block text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide">
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
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 shadow-2xl border border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                Get Started with the Right Service
              </h3>
              <form
                onSubmit={handleSubmit}
                className="w-full mx-auto space-y-4"
                aria-label="Service Selection Form"
              >
                <div className="grid grid-cols-2 gap-4 text-left">
                  {/* Personal Information Section */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-gray-300 mb-1 text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-300 mb-1 text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-300 mb-1 text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Service Selection Section */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="service-type"
                      className="text-gray-300 mb-1 text-sm font-medium"
                    >
                      Select a Service
                    </label>
                    <select
                      id="service-type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
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

                {error && (
                  <div className="text-red-400 text-xs mt-2 bg-red-900/20 p-2 rounded-lg border border-red-500/30">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-teal-500/20"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Explore Services <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
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
