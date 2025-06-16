import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ servicesData, linkPrefix }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-10 justify-items-center lg:mx-20">
    {servicesData.map((service) => (
      <div className="p-4" key={service.id}>
        <div className="bg-white rounded-md shadow-lg overflow-hidden relative group">
          <img
            src={service.image}
            alt={service.title}
            className="relative z-40 w-full h-64 object-cover"
          />
          <div className="absolute z-40 p-2 bg-teal-400 top-52 left-2 w-14 h-14 mx-2 transition-transform transform group-hover:rotate-180">
            <img
              src={service.icon}
              alt="icon"
              className="w-full h-full transition-transform transform group-hover:rotate-180"
            />
          </div>
          <div className="p-4 relative">
            <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
              <img src={service.shape} alt="shape" className="opacity-20" />
            </div>
            <h4 className="text-start text-lg font-semibold cursor-pointer">
              <Link to={`/${linkPrefix}/${service.id}`} className="relative z-50 text-teal-400">
                {service.title}
              </Link>
            </h4>
            <p className="text-start mt-2 text-gray-600 md:min-h-24">
              {service.description}
            </p>
            <Link
              to={`/${linkPrefix}/${service.id}`}
              className="relative z-50 mt-4 flex justify-start cursor-pointer text-teal-400 group-hover:font-bold"
            >
              Read More
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="ml-1 group-hover:ml-4" fill="#111"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ServicesCard;