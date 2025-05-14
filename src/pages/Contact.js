import React, { useState} from "react";
import "../components/customcss/contact.css";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";

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

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://formspree.io/f/xnnqnvdg",
          formData
        );

        // Check response status
        if (response.status === 200) {
          setSuccessMessage("Form submitted successfully!");
          setErrorMessage("");
          // Reset form
          setFormData({ name: "", email: "", number: "", message: "" });
          setErrors({});
        }
      } catch (error) {
        setErrorMessage("There was an error submitting the form.");
        setSuccessMessage("");
      }
    } else {
      setErrors(validationErrors);
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

 
  return (
    <>
      
        <>
          <div className="bg-contact min-h-screen">
            <Navbar />
            <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
              <h1 className="text-4xl md:text-5xl text-center text-white font-poiret tracking-[6px] uppercase mb-16">
                Contact
              </h1>

              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Form Section */}
                <form 
                  id="contact-form" 
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="NAME"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="EMAIL"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors ${
                        errors.number ? "border-red-500" : ""
                      }`}
                      placeholder="NUMBER"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    {errors.number && (
                      <span className="text-red-500 text-sm mt-1 block">{errors.number}</span>
                    )}
                  </div>

                  <textarea
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 px-4 rounded-lg focus:outline-none focus:border-[#027b9a] transition-colors min-h-[150px] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
                  )}

                  {successMessage && (
                    <div className="text-green-500 text-center py-2">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="text-red-500 text-center py-2">{errorMessage}</div>
                  )}

                  <button
                    className="w-full bg-[#027b9a] hover:bg-[#025f77] text-white py-2 sm:py-3 md:py-4 rounded-lg transition-colors font-semibold tracking-wider text-sm sm:text-base md:text-lg mt-2 mb-8"
                    type="submit"
                  >
                    <i className="fa fa-paper-plane mr-2"></i>
                    SEND
                  </button>
                </form>

                {/* Contact Info Section */}
                <div className="text-white space-y-8">
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full">
                        <i className="fa fa-map-marker fa-lg"></i>
                      </div>
                      <span className="text-lg">MBP, Mahape, Ghansoli</span>
                    </li>

                    <li className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full">
                        <i className="fa fa-phone fa-lg"></i>
                      </div>
                      <a href="tel:+919930365555" className="text-lg hover:text-[#027b9a] transition-colors">
                        +91 9930365555
                      </a>
                    </li>

                    <li className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full">
                        <i className="fa fa-envelope fa-lg"></i>
                      </div>
                      <a href="mailto:nextgeninfratech@gmail.com" className="text-lg hover:text-[#027b9a] transition-colors">
                        nextgeninfratech@gmail.com
                      </a>
                    </li>
                  </ul>


                  <div className="pt-8 border-t border-[#e7e7e779]">
                    <ul className="flex justify-start space-x-6 px-4 py-2">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100086358938007"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                        >
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                        >
                          <i className="fa fa-youtube fa-lg"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/80077007/admin/notifications/all/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                        >
                          <i className="fa fa-linkedin fa-lg"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/nextgen.infratech/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-full hover:bg-[#025f77] transition-colors"
                        >
                          <i className="fa fa-instagram fa-lg"></i>
                        </a>
                      </li>
                    </ul>
                    
                    <div className="text-left pl-4 pt-4 text-sm tracking-wider">
                    ©2024. | NextGen Infratech | All rights reserved.
                    </div>
                  </div>
                  
                  {/* Remove the original copyright div that was here */}
                </div>
              </div>
            </section>
          </div>
        </>
    </>
  );
};

export default Contact;
