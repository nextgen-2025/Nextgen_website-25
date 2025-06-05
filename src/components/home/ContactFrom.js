import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactFrom = ({ 
  tagline = "LET'S CONNECT",
  heading = "Ready to discuss your project?",
  description = "Talk with our experts about real estate, digital marketing, co-working spaces, and IT services to build the perfect solution!"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, tel, email, message } = formData;
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Name must only contain letters.";
    if (!/^\d{10}$/.test(tel)) return "Phone must be exactly 10 digits.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is not valid.";
    if (!message) return "Message cannot be empty.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://nextgen-backend-2025-production-f2de.up.railway.app/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, 
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.tel,
          message: formData.message
        }),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", tel: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 sm:py-16 md:py-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left text-white">
            <span className="text-teal-400 font-semibold text-base sm:text-lg tracking-wide block">
              {tagline}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 sm:mt-6 mb-4 sm:mb-6 text-left">
              {heading}
            </h3>
            <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-300 mb-6 sm:mb-8">
              {description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-white font-medium"
            >
              Get Started
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-teal-400 text-2xl sm:text-3xl md:text-4xl font-bold">
                Get In Touch
              </h2>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
                  />
                  <input
                    type="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full min-h-[120px] bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white p-4 transition-all duration-300 placeholder:text-gray-400"
                ></textarea>
                {error && (
                  <div className="text-red-400 text-sm font-medium p-3 bg-red-400/10 rounded-lg">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="text-teal-400 text-sm font-medium p-3 bg-teal-400/10 rounded-lg">
                    {success}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg py-2.5 sm:py-3 px-6 font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactFrom;
