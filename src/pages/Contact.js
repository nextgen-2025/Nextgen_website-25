import React, { useState } from "react";
import "../components/customcss/contact.css";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

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

    if (!/[a-zA-Z]/.test(name)) {
      newErrors.name = "Name must contain at least one alphabet.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Email must be valid.";
    }

    if (!/^\d{10}$/.test(number)) {
      newErrors.number = "Number must be exactly 10 digits.";
    }

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
          "https://nextgen-backend-2025-production-f2de.up.railway.app/api/inquiry",
          formData
        );

        if (response.status === 200) {
          setSuccessMessage("Form submitted successfully!");
          setErrorMessage("");
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 font-sans">
      <Helmet>
        <title>Contact NextGen Infratech | Get in Touch</title>
        <meta name="description" content="Have questions or need support? Contact NextGen Infratech in Mahape, Navi Mumbai for coworking, real estate, and digital marketing solutions." />
      </Helmet>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <span className="inline-block text-[#027b9a]"><i className="fa-solid fa-address-book"></i></span> Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl shadow-md">
                  <span className="text-2xl text-white"> <FaMapMarkerAlt className="text-xl text-white" /> </span>
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-medium text-white mb-1">Our Location</h3>
                  <p className="text-gray-300">MBP, Mahape, Ghansoli, Navi Mumbai, Maharashtra 400710</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl shadow-md">
                  <span className="text-2xl text-white"> <FaPhoneAlt className="text-xl text-white" /> </span>
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-medium text-white mb-1">Phone Number</h3>
                  <a href="tel:+919930365555" className="text-gray-300 hover:text-[#027b9a] transition-colors">+91 9930365555</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#027b9a] rounded-xl">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-medium text-white mb-1">Email Address</h3>
                  <a href="mailto:nextgeninfratech@gmail.com" className="text-gray-300 hover:text-[#027b9a] transition-colors break-all">nextgeninfratech@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <span className="inline-block text-[#027b9a]"><i className="fa-solid fa-share-nodes"></i></span> Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100086358938007" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl hover:bg-[#025f77] transition-colors group shadow-md">
                  <FaFacebookF className="text-xl text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl hover:bg-[#025f77] transition-colors group shadow-md">
                  <FaYoutube className="text-xl text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/80077007/admin/notifications/all/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl hover:bg-[#025f77] transition-colors group shadow-md">
                  <FaLinkedinIn className="text-xl text-white group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/nextgen.infratech/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#027b9a] rounded-xl hover:bg-[#025f77] transition-colors group shadow-md">
                  <FaInstagram className="text-xl text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
              <span className="inline-block text-[#027b9a]"><i className="fa-solid fa-paper-plane"></i></span> Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-user text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#027b9a] transition-colors ${errors.name ? "border-red-500" : ""}`}
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
                )}
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#027b9a] transition-colors ${errors.email ? "border-red-500" : ""}`}
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
                )}
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-phone text-gray-400"></i>
                  </div>
                  <input
                    type="tel"
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#027b9a] transition-colors ${errors.number ? "border-red-500" : ""}`}
                    placeholder="Your Phone Number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.number && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.number}</span>
                )}
              </div>
              <div>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <i className="fa-solid fa-comment-dots text-gray-400"></i>
                  </div>
                  <textarea
                    className={`w-full bg-transparent border-2 border-[#e7e7e779] text-white py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:border-[#027b9a] transition-colors min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
                )}
              </div>
              {successMessage && (
                <div className="text-green-500 text-center py-2 flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>{successMessage}</span>
                </div>
              )}
              {errorMessage && (
                <div className="text-red-500 text-center py-2 flex items-center justify-center space-x-2">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>{errorMessage}</span>
                </div>
              )}
              <button className="w-full bg-[#027b9a] hover:bg-[#025f77] text-white py-3 rounded-xl transition-colors font-semibold text-lg flex items-center justify-center space-x-2 group shadow-md" type="submit">
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-16 text-gray-400 text-sm">
          ©2024 NextGen Infratech | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;