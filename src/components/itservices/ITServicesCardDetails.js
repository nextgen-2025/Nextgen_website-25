import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../home/Footer";
import Loader from "../loader/Loader";

const ITServicesCardDetails = () => {
  const { id } = useParams(); // Get the service ID from the URL
  const [service, setService] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/services.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Find the service that matches the ID
        const foundService = data.find(
          (service) => service.id === parseInt(id)
        );
        setService(foundService);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, [id]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-10 servicesdetails-bnr it-banner flex justify-start items-end bg-center bg-fixed relative overflow-hidden w-full h-[40vh] md:h-[60vh] pt-10 md:pt-0 rounded-b-[60px]">
        <div className="md:pb-0 flex items-center justify-between ">
          <div className="flex flex-col items-start px-10 md:mb-0">
            <div>
              <h1 className="text-[#28aa4a] text-3xl md:text-6xl font-extrabold font-lato">
                {service.title}
              </h1>
            </div>
            <div>
              <nav aria-label="breadcrumb" className="w-max">
                <ol className="flex w-full flex-wrap items-center rounded-md px-1 py-2">
                  <li className="flex cursor-pointer items-center text-lg font-thin text-white transition-colors duration-300 hover:text-[#28aa4a]">
                    <Link to="/">Home</Link>
                    <span className="pointer-events-none mx-2 text-white">
                      /
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center text-lg font-thin text-white transition-colors duration-300 hover:text-[#28aa4a]">
                    <Link to="/it-services">IT Services</Link>
                    <span className="pointer-events-none mx-2 text-white">
                      /
                    </span>
                  </li>
                  <li className="flex cursor-pointer items-center text-lg font-thin text-white transition-colors duration-300 hover:text-[#28aa4a]">
                    <span className="pointer-events-none text-white">
                      {service.title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center my-10 mx-4 md:mx-0">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="md:w-[50%] ">
            <div className="flex justify-center ">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="my-5">
              <h2 className="text-2xl font-bold text-start font-Manrope">
                {service.title}
              </h2>
              <p className="text-gray-800 mt-4 text-start font-Manrope">
                {service.description}
              </p>
            </div>

            <div>
              {service.faq.map((item, index) => (
                <div key={index} className="md:py-2  border-b">
                  <button
                    className="flex justify-between items-center w-full py-2 text-left bg-white focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-xl md:text-xl font-extralight">
                      {item.question}
                    </span>
                    <span className="text-gray-600">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="py-4 text-gray-700 text-start font-Manrope">
                      {item.answer}
                    </p>
                  </div>
                  {/* Border under the answer */}
                  {/* <div
                    className={`border-b border-gray-300 transition-all duration-300 ease-in-out ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  ></div> */}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-3 mt-10 md:mt-0 md:mx-5 w-full md:w-[25%] relative md:left-10">
            <h1 className="text-start md:pl-4 font-bold text-lg">
              All Services
            </h1>
            <ul>
              {[
                { id: 1, title: "Network Services" },
                { id: 2, title: "Server Services" },
                { id: 3, title: "Data Management" },
                { id: 4, title: "Firewall Services" },
                { id: 5, title: "Web Development" },
                { id: 6, title: "24/7 IT Support" },
              ].map((item) => (
                <Link key={item.id} to={`/it-services/${item.id}`}>
                  <li
                    className={`font-Manrope flex items-center py-4 w-[95%] px-2 m-2 shadow-sm hover:shadow-lg cursor-pointer ${
                      service && service.id === item.id
                        ? "bg-green-800 text-white"
                        : ""
                    }`}
                  >
                    {item.title}
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      className="ml-3"
                      fill={
                        service && service.id === item.id ? "white" : "#28aa4a"
                      }
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITServicesCardDetails;
