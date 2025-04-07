import React from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Network Services",
    description:
      "Safeguard your data with our comprehensive network security solutions.",
    icon: "./ITCardsServices/icon1.png",
    image: "./ITCardsServices/1.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 2,
    title: "Server Services",
    description:
      "Leverage cloud computing to enhance your operational efficiency",
    icon: "./ITCardsServices/icon2.png",
    image: "./ITCardsServices/2.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 3,
    title: "Data Management",
    description:
      "Protect your data’s integrity and usability with our expert management services.",
    icon: "./ITCardsServices/icon3.png",
    image: "./ITCardsServices/3.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 4,
    title: "Firewall Services",
    description: "Fortify your network with our advanced firewall solutions",
    icon: "./ITCardsServices/icon4.png",
    image: "./ITCardsServices/4.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 5,
    title: "Web Development",
    description:
      "Enhance your online presence with our tailored web development services.",
    icon: "./ITCardsServices/icon5.png",
    image: "./ITCardsServices/5.png",
    shape: "./ITCardsServices/itshape.png",
  },
  {
    id: 6,
    title: "24*7 IT Support",
    description:
      "Ensure uninterrupted operations with our round-the-clock IT support.",
    icon: "./ITCardsServices/icon6.png",
    image: "./ITCardsServices/6.webp",
    shape: "./ITCardsServices/itshape.png",
  },
];

const ITServicesCards = () => {
  return (
    <div className="pt-2">
      <div className="pb-5">
        <div className="">
          <h1 className="text-[#28aa4a] text-5xl font-extrabold font-lato">
            IT Services We Offer
          </h1>
          <p className="text-[#28aa4a] text-2xl font-thin py-3 font-Manrope">
            Smart Solutions for Smart Businesses
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 justify-items-center lg:mx-20">
        {servicesData.map((service) => (
          <div className="p-4 " key={service.id}>
            <div className="bg-white w-full  rounded-tl-[100px] shadow-lg overflow-hidden relative group">
              <img
                src={service.image}
                alt={service.title}
                className="relative z-40 w-full h-64 object-cover"
              />
              <div className="absolute z-40 p-2 bg-[#28aa4a] top-52 left-2 w-14 h-14 mx-2 transition-transform transform group-hover:rotate-180">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-full h-full transition-transform transform group-hover:rotate-180"
                />
              </div>
              <div className="p-4 relative">
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
                  <img
                    src={service.shape}
                    alt="shape"
                    className=" opacity-20"
                  />
                </div>
                <h4 className="text-start text-lg font-semibold cursor-pointer">
                  <Link
                    to={`/it-services/${service.id}`}
                    className="relative z-50 text-[#28aa4a] font-lato"
                  >
                    {service.title}
                  </Link>
                </h4>
                <p className="text-start mt-2 text-gray-600 min-h-14">
                  {service.description}
                </p>
                <Link
                  to={`/it-services/${service.id}`}
                  className="font-lato relative z-50 mt-4 flex justify-start cursor-pointer text-[#28aa4a] group-hover:font-bold"
                >
                  Read More
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="ml-1 group-hover:ml-4"
                    fill="#28aa4a"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ITServicesCards;
