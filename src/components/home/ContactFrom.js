import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xnnqnvdg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", tel: "", email: "", message: "" }); // Clear form
      } else {
        setError("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="contact-bg relative bg-center bg-cover bg-fixed md:min-h-[70vh] md:h-fit">
      <div className="h-full bg-black bg-opacity-50 p-4 flex justify-center items-center md:min-h-[70vh] md:h-fit">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="text-white flex flex-col items-start mt-5 lg:ml-20">
            <h1 className="font-thin text-xl font-Manrope">Let's Talk</h1>
            <h3 className="text-start font-bold text-5xl my-3 font-lato">
              Ready to discuss your next project?
            </h3>
            <p className="text-start text-base my-3 text-white font-Manrope">
              Talk with our experts about real estate, digital marketing,
              co-working spaces, and IT services to build the perfect solution!
            </p>
            <Link
              to="/contact"
              className="button-txt flex items-center border-2 text-white bg-transparent rounded-full py-1.5 px-10 text-lg font-medium transition duration-300 hover:bg-white hover:text-black mt-6 font-Manrope"
            >
              Get Started
              <svg
                height="16px"
                version="1.1"
                viewBox="0 0 18 18"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 svg-icon hover-icon"
              >
                <title />
                <desc />
                <defs />
                <g
                  fill="none"
                  fillRule="evenodd"
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                >
                  <g
                    fill="#ffffff"
                    className="icon-color"
                    id="Core"
                    transform="translate(-339.000000, -297.000000)"
                  >
                    <g
                      id="launch"
                      transform="translate(339.000000, 297.000000)"
                    >
                      <path
                        d="M16,16 L2,16 L2,2 L9,2 L9,0 L2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,9 L16,9 L16,16 L16,16 Z M11,0 L11,2 L14.6,2 L4.8,11.8 L6.2,13.2 L16,3.4 L16,7 L18,7 L18,0 L11,0 L11,0 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
          <div className="md:container flex flex-col md:mt-4 mt-12">
            <div className="text-start md:pl-[132px] tracking-tighter">
              <h2 className="text-white text-4xl font-bold mb-5 font-lato">
                Get In Touch
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 flex items-center">
                    <div className="flex flex-col flex-1 mr-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="form-control rounded-2xl mt-1 w-full h-12 bg-transparent bg-opacity-60 border-[0.1px] border-white focus:outline-none focus:border-white text-white px-3 placeholder:text-white placeholder:font-thin placeholder:text-base"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <input
                        type="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="form-control mt-1 w-full h-12 bg-transparent bg-opacity-60 rounded-2xl border-[0.1px] border-white focus:outline-none focus:border-white text-white px-3 placeholder:text-white placeholder:font-thin placeholder:text-base"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="form-control mt-1 w-full h-12 bg-transparent bg-opacity-60 border-[0.1px] rounded-2xl border-white focus:outline-none focus:border-white text-white px-3 placeholder:text-white placeholder:font-thin placeholder:text-base"
                    />
                  </div>
                  <div className="flex flex-col mb-1">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="form-control rounded-2xl mt-1 w-full bg-transparent bg-opacity-60 border-[0.1px] border-white focus:outline-none focus:border-white text-white min-h-[100px] px-3 pt-3 placeholder:text-white placeholder:font-thin placeholder:text-base"
                    ></textarea>
                  </div>
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  {success && (
                    <div className="text-green-500 mb-4">{success}</div>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="border-2 border-white text-white bg-transparent rounded-full py-1.5 px-10 text-lg font-medium transition duration-300 hover:bg-white hover:text-black mt-6 mb-3 font-Manrope"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
