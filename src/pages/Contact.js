import React, { useState} from "react";
import "../components/customcss/contact.css";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  }); 
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, number, message } = formData;

    // Name validation: must have at least one alphabet
    if (!/[a-zA-Z]/.test(name)) {
      newErrors.name = "Name must contain at least one alphabet.";
    }

    // Email validation: simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Email must be valid.";
    }

    // Number validation: must be exactly 10 digits
    if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Number must be exactly 10 digits.";
    }

    // Message validation: optional, can be customized
    if (message.trim() === "") {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setIsSubmitting(true);

    if (Object.keys(validationErrors).length === 0) {
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
            phone: formData.number,
            message: formData.message
          }),
        });

        if (response.ok) {
          setSuccessMessage("Form submitted successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", number: "", message: "" });
          setErrors({});
        } else {
          const data = await response.json();
          setErrorMessage(data.message || "There was an error submitting the form.");
          setSuccessMessage("");
        }
      } catch (error) {
        setErrorMessage("Failed to connect to the server. Please try again later.");
        setSuccessMessage("");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
      setSuccessMessage("");
      setErrorMessage("");
      setIsSubmitting(false);
    }
  };

 
  return (
    <>
      <>
        <div className="bg-contact min-h-screen overflow-x-hidden">
          <Navbar />
          <section id="contact" className="container mx-auto px-4 py-8 md:py-16 lg:py-20 max-w-7xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-poiret tracking-[4px] md:tracking-[6px] uppercase mt-8 sm:mt-4 md:mt-0 mb-8 md:mb-12">
              Contact
            </h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {/* Form Section */}
              <form 
                id="contact-form" 
                className="space-y-4 md:space-y-5 w-full"
                onSubmit={handleSubmit}
              >
                <div className="form-group w-full">
                  <input
                    type="text"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="NAME"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs md:text-sm mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div className="form-group w-full">
                  <input
                    type="email"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="EMAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs md:text-sm mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div className="form-group w-full">
                  <input
                    type="tel"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                      errors.number ? "border-red-500" : ""
                    }`}
                    placeholder="NUMBER"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  {errors.number && (
                    <span className="text-red-500 text-xs md:text-sm mt-1 block">{errors.number}</span>
                  )}
                </div>

                <textarea
                  className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-2 md:py-3 px-3 md:px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors min-h-[50px] md:min-h-[70px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="MESSAGE"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-xs md:text-sm mt-1 block">{errors.message}</span>
                )}

                {successMessage && (
                  <div className="text-green-500 text-center py-2 text-sm md:text-base">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="text-red-500 text-center py-2 text-sm md:text-base">{errorMessage}</div>
                )}

                <button
                  className={`w-full bg-[#027b9a] hover:bg-[#025f77] text-white py-2 sm:py-2.5 md:py-3 rounded-lg transition-colors font-semibold tracking-wider text-xs sm:text-sm md:text-base mt-2 mb-4 md:mb-6 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa fa-paper-plane mr-2"></i>
                      SEND
                    </>
                  )}
                </button>
              </form>

              {/* Contact Info Section */}
              <div className="text-white space-y-5 md:space-y-6">
                <ul className="space-y-4 md:space-y-5">
                  <li className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#027b9a] rounded-full">
                      <i className="fa fa-map-marker fa-lg"></i>
                    </div>
                    <span className="text-base md:text-lg">MBP, Mahape, Ghansoli</span>
                  </li>

                  <li className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#027b9a] rounded-full">
                      <i className="fa fa-phone fa-lg"></i>
                    </div>
                    <a href="tel:+919930365555" className="text-base md:text-lg hover:text-[#027b9a] transition-colors">
                      +91 9930365555
                    </a>
                  </li>

                  <li className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#027b9a] rounded-full">
                      <i className="fa fa-envelope fa-lg"></i>
                    </div>
                    <a href="mailto:nextgeninfratech@gmail.com" className="text-base md:text-lg hover:text-[#027b9a] transition-colors break-all">
                      nextgeninfratech@gmail.com
                    </a>
                  </li>
                </ul>

                <div className="pt-5 md:pt-6 border-t border-[#e7e7e779]">
                  <ul className="flex justify-start space-x-3 md:space-x-4 px-2 md:px-3 py-2">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100086358938007"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                      >
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                      >
                        <i className="fa fa-youtube fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/80077007/admin/notifications/all/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                      >
                        <i className="fa fa-linkedin fa-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/nextgen.infratech/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                      >
                        <i className="fa fa-instagram fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                  
                  <div className="text-left pl-2 md:pl-3 pt-3 text-xs md:text-sm tracking-wider">
                  ©2024. | NextGen Infratech | All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
};

export default Contact;
