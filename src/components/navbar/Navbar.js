import React, { useState, useEffect } from "react";
import logo from "../../assets/NextgenLogo.png";
import "../customcss/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  let aboutTimeout, servicesTimeout;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnterAbout = () => {
    clearTimeout(aboutTimeout);
    setIsAboutOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutTimeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 190);
  };

  const handleMouseEnterServices = () => {
    clearTimeout(servicesTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 190);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = bgColor === "bg-white" ? "text-black" : "text-white";

  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen((prev) => !prev);
  };

  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <nav
        className={`fixed w-full py-1 z-[999] top-0 start-0 ${bgColor} transition-colors duration-300`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-1">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse flex-1"
          >
            <img src={logo} className="w-36 h-12" alt="Nextgen Infratech" />
          </Link>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 flex-0"
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 ${textColor} font-extralight border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3  rounded md:bg-transparent md:p-0 hover:text-[#28aa4a]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
              >
                <p
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  About
                  <span>
                    <i
                      className={`fa fa-angle-down ml-2 transform transition-transform duration-200 ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </p>
                <ul
                  className={`absolute left-0 top-12 mt-2 w-48 bg-white rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                    isAboutOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <li>
                    <Link
                      to="/aboutus"
                      className="block py-2 px-4 text-black hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teams"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="relative"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <p
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Services
                  <span>
                    <i
                      className={`fa fa-angle-down ml-2 transform transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </p>
                <ul
                  className={`absolute left-0 top-12 mt-2 w-72 bg-white rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <li>
                    <Link
                      to="/coworking"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                    >
                      Co-Working Space
                    </Link>
                  </li>
                  <li>
                    <Link
                      // to="/it-services"
                      to="/it-services"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                    >
                      IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/digtal-marketing"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                    >
                      Digital Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/real-estate"
                      className="block py-2 px-4 text-gray-900 hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                    >
                      Real Estate
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/leaderships"
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Leadership Team
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 ${textColor} cursor-pointer rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#28aa4a] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center md:order-2 flex-0 space-x-3 md:space-x-0 rtl:space-x-reverse pl-10">
            <button
              type="button"
              onClick={() => (window.location.href = "tel:+919930365555")}
              className="hidden md:hidden lg:block btn btn-anim text-white bg-[#28aa4a] hover:bg-[#3eb85e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 p-0 md:py-2 text-center h-9 dark:bg-blue-600 dark:hover:bg-[#28aa4a] dark:focus:ring-[#28aa4a]"
            >
              <i className="fa fa-phone"></i> <span>+91 9930365555</span>
            </button>
            {/* hamburger button */}
            <div>
              <button
                className="relative z-50 group "
                onClick={toggleMobileMenu}
              >
                <div className="md:hidden relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all mr-2">
                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center ">
                    <div
                      className={`h-[2px] w-10 transform transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "rotate-45 translate-y-[9px]"
                          : "origin-left"
                      } ${bgColor === "bg-white" ? "bg-black" : "bg-white"}`}
                    ></div>
                    <div
                      className={` h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                        isMobileMenuOpen ? "opacity-0" : ""
                      } ${bgColor === "bg-white" ? "bg-black" : "bg-white"}`}
                    ></div>
                    <div
                      className={`h-[2px] w-10 transform transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "-rotate-45 -translate-y-[9px]"
                          : "origin-left"
                      } ${bgColor === "bg-white" ? "bg-black" : "bg-white"}`}
                    ></div>
                  </div>
                </div>
              </button>
            </div>
            {/* hamburger button */}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed z-[999] mt-16 w-full ${
          isMobileMenuOpen ? "block " : "hidden"
        }`}
      >
        <div>
          <ul className="flex flex-col justify-start items-start py-20 gap-10 p-4  bg-white shadow-lg max-h-[100vh] h-[100vh] overflow-y-auto">
            <li className="">
              <Link
                to="/"
                className="block text-3xl py-2 px-4 text-gray-600 font-thin"
              >
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
              onClick={toggleAboutDropdown}
            >
              <p className="block text-3xl py-2 px-4 text-gray-600 font-thin">
                About Us
                <span>
                  <i
                    className={`fa fa-angle-down ml-2 transform transition-transform duration-200}`}
                  />
                </span>
              </p>
              <ul
                className={`${
                  isAboutDropdownOpen
                    ? "dropdown-enter-active"
                    : "dropdown-exit-active"
                } transition-all duration-300 ease-in-out`}
              >
                {isAboutDropdownOpen && (
                  <div className="flex flex-col items-start">
                    <li>
                      <Link
                        to="/aboutus"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/teams"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/careers"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gallery"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        Gallery
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
              onClick={toggleServicesDropdown}
            >
              <p className="flex items-start text-3xl py-2 px-4 text-gray-600 font-thin">
                Services
                <span>
                  <i
                    className={`fa fa-angle-down ml-2 transform transition-transform duration-200}`}
                  />
                </span>
              </p>
              <ul
                className={`${
                  isServicesDropdownOpen
                    ? "dropdown-enter-active"
                    : "dropdown-exit-active"
                } transition-all duration-300 ease-in-out`}
              >
                {isServicesDropdownOpen && (
                  <div className="flex flex-col items-start">
                    <li>
                      <Link
                        to="/coworking"
                        className="block text-2xl py-2 px-4 text-gray-600 font-thin  hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                      >
                        Co-Working Space
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/it-services"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        IT Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/digtal-marketing"
                        className="block text-2xl py-2 px-4 w-full text-gray-600 font-thin hover:bg-gray-50 border-b border-[#1b23360a] border-dashed"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/real-estate"
                        className="block text-2xl py-2 px-4 text-gray-600 font-thin  hover:bg-gray-100 border-b border-[#1b23360a] border-dashed"
                      >
                        Real Estate
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
            </li>
            <li className="">
              <Link
                to="/leaderships"
                className="block text-3xl py-2 px-4 text-gray-600 font-thin"
              >
                Leadership Team
              </Link>
            </li>
            <li className="">
              <Link
                to="/contact"
                className="block text-3xl py-2 px-4 text-gray-600 font-thin"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        /* Custom CSS for smooth dropdown transitions */
        .dropdown-enter {
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: opacity 0.3s ease, height 0.3s ease;
        }

        .dropdown-enter-active {
          opacity: 1;
          height: auto;
        }

        .dropdown-exit {
          opacity: 1;
          height: auto;
          transition: opacity 0.3s ease, height 0.3s ease;
        }

        .dropdown-exit-active {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
