import React, { useState } from "react";
import { FaMapMarkerAlt, FaCity } from "react-icons/fa";
import arrow from "../../assets/aroowog.png";
import Popup from "./Popup";

const CWForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    city: "Navi Mumbai",
    area: "Ghansoli",
    name: "",
    tel: "",
    email: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);

  // Space data
  const spaceData = [
    {
      title: "Dedicated Desk",
      description: "Flexible seating options designed for creative freelancers and those looking for a dynamic workspace",
    },
    {
      title: "Private Cabins",
      description: "For those who need privacy, our spacious, fully furnished cabins offer a focused work environment.",
    },
    {
      title: "Meeting Room",
      description: "Perfect for smaller discussions and collaborations, our meeting rooms provide a private, productive space.",
    },
    {
      title: "Conference Room",
      description: "Our conference rooms are fully equipped with high-speed internet, projectors, and other essential tools to ensure your meetings run smoothly.",
    },
    {
      title: "Training Room",
      description: "A specialized room equipped for team training, workshops, or seminars, providing a focused environment for learning and development.",
    },
    {
      title: "Mini Cabin",
      description: "Our Mini Cabins provide a private, cozy workspace perfect for individuals or small teams of up to 2 people, ensuring focused productivity.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, tel, email, type, city, area } = formData;
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Name must only contain letters.";
    if (!/^\d{10}$/.test(tel)) return "Phone must be exactly 10 digits.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is not valid.";
    if (!type) return "Please select a space type.";
    if (!city) return "City is required.";
    if (!area) return "Area is required.";
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

    const selected = spaceData.find(space => space.title.toLowerCase() === formData.type.toLowerCase());
    if (selected) {
      setSelectedSpace(selected);
      setIsPopupOpen(true);
    }

    try {
      const res = await fetch("https://formspree.io/f/xnnqnvdg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("Your inquiry has been sent successfully!");
        setFormData({
          type: "",
          city: "Navi Mumbai",
          area: "Ghansoli",
          name: "",
          tel: "",
          email: ""
        });
      } else {
        setError("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedSpace(null);
  };

  return (
    <div id="quote_form" className="relative py-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
      <div className="h-full p-4 flex justify-center items-center">
        <div className="w-full max-w-[500px] mx-auto">
          <div className="mb-8">
            <h2 className="text-teal-400 text-4xl font-bold text-center">Find Your Space</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Space Selection */}
            <div className="flex divide-x divide-gray-300 rounded-lg overflow-hidden bg-gray-800 bg-opacity-50 border border-teal-400/30">
              <div className="bg-gray-800 px-3 py-2 font-semibold text-teal-400 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                Find
              </div>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                style={{ backgroundImage: `url(${arrow})` }}
                className="flex-1 px-3 py-2 bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-400/20 text-white font-medium text-sm sm:text-base transition-all duration-300 appearance-none bg-no-repeat bg-[length:16px_16px] bg-[right_0.5rem_center] pr-8"
                required
              >
                <option value="" disabled>Select Type</option>
                {spaceData.map(space => (
                  <option key={space.title} value={space.title.toLowerCase()}>{space.title}</option>
                ))}
              </select>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex divide-x divide-gray-300 rounded-lg overflow-hidden bg-gray-800 bg-opacity-50 border border-teal-400/30 relative">
                <div className="bg-gray-800 px-3 py-2 font-semibold text-teal-400 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                  In
                </div>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-400/20 text-white font-medium text-sm sm:text-base transition-all duration-300 pr-10"
                  required
                />
                <FaCity className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-400 opacity-70 w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              <div className="flex divide-x divide-gray-300 rounded-lg overflow-hidden bg-gray-800 bg-opacity-50 border border-teal-400/30 relative">
                <div className="bg-gray-800 px-3 py-2 font-semibold text-teal-400 flex-shrink-0 w-[60px] sm:w-[80px] text-center">
                  Near
                </div>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Area / Locality"
                  className="flex-1 px-3 py-2 bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-teal-400/20 text-white font-medium text-sm sm:text-base transition-all duration-300 pr-10"
                  required
                />
                <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-400 opacity-70 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
                required
              />
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-12 bg-gray-800 bg-opacity-50 rounded-lg border border-teal-400/30 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 text-white px-4 transition-all duration-300 placeholder:text-gray-400"
              required
            />

            {/* Error and Success Messages */}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-teal-500 hover:bg-teal-600 text-white rounded-lg py-3 px-6 font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
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
                  Searching...
                </>
              ) : (
                'Search Space'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        selectedSpace={selectedSpace}
      />

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

export default CWForm;
