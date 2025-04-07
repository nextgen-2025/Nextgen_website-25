import React, { useState, useEffect } from "react";
import "../components/customcss/contact.css";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/loader/Loader";

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="bg-contact">
            <Navbar />
            <section
              id="contact"
              className="h-full w-full flex flex-col justify-center pt-20 md:pt-0"
            >
              <h1 className="section-header text-center my-0 mx-auto py-10 px-0 uppercase text-white trac tracking-[6px] font-poiret">
                Contact
              </h1>

              <div className="contact-wrapper">
                <form
                  id="contact-form"
                  className="form-horizontal flex flex-col"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className={`form-control border-[1px] border-[#e7e7e779] py-1.5 placeholder:px-1 caret-white rounded-md ${
                          errors.name ? "border-red-500" : ""
                        }`}
                        id="name"
                        placeholder="NAME"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && (
                        <span className="text-red-500 flex">{errors.name}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className={`form-control border-[1px] border-[#e7e7e779] caret-white py-1.5 placeholder:px-1 rounded-md ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        id="email"
                        placeholder="EMAIL"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && (
                        <span className="text-red-500">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="tel"
                        className={`form-control border-[1px] border-[#e7e7e779] caret-white py-1.5 placeholder:px-1 rounded-md ${
                          errors.number ? "border-red-500" : ""
                        }`}
                        id="number"
                        placeholder="Number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                      {errors.number && (
                        <span className="text-red-500 flex">
                          {errors.number}
                        </span>
                      )}
                    </div>
                  </div>

                  <textarea
                    className={`form-control border-[1px] border-[#e7e7e779] caret-white placeholder:px-1 rounded-md ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    rows="6"
                    placeholder="MESSAGE"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 flex">{errors.message}</span>
                  )}

                  {successMessage && (
                    <div className="text-green-500">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="text-red-500">{errorMessage}</div>
                  )}

                  <button
                    className="bg-[#027b9a] send-button"
                    id="submit"
                    type="submit"
                  >
                    <div className="alt-send-button">
                      <i className="fa fa-paper-plane text-white pt-2"></i>
                      <span className="send-text text-white">SEND</span>
                    </div>
                  </button>
                </form>

                <div className="md:ml-[200px] mt-10 md:mt-0">
                  <ul className="contact-list">
                    <li className="list-item">
                      <i className="fa fa-map-marker fa-2x text-white">
                        <span className="contact-text place text-white">
                          MBP, Mahape, Ghansoli
                        </span>
                      </i>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-phone fa-2x text-white">
                        <span className="contact-text phone text-white">
                          <a
                            href="tel:1-212-555-5555"
                            title="Give me a call text-white"
                          >
                            +91 9930365555
                          </a>
                        </span>
                      </i>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-envelope fa-2x text-white">
                        <span className="contact-text gmail">
                          <Link to="" title="Send me an email">
                            nextgeninfratech@gmail.com
                          </Link>
                        </span>
                      </i>
                    </li>
                  </ul>

                  <hr />
                  <ul className="social-media-list">
                    <a
                      href="https://www.facebook.com/profile.php?id=100086358938007"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/80077007/admin/notifications/all/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://www.instagram.com/nextgen.infratech/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-instagram " aria-hidden="true"></i>
                      </li>
                    </a>
                  </ul>
                  <hr />

                  <div className="copyright">
                    &copy; ALL OF THE RIGHTS RESERVED
                  </div>
                </div>
                {/* <a href="https://www.google.com" target="_blank" rel="noreferrer">
            sdddadas
          </a> */}
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
