import React from "react";

const CareerHome = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:items-start md:mx-20 mx-4 mt-10 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-[#24aa4a] font-lato text-center md:text-left">
          Join Our Team
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-6 py-2 font-Manrope text-center md:text-left">
          We are looking for talented individuals to help us shape the future.
          If you are passionate and driven, we want to hear from you!
        </p>
        <div className="flex flex-col items-center md:items-start">
          <span>
            <h2 className="text-xl md:text-2xl font-semibold text-[#24aa4a] text-center md:text-left mb-2 font-lato">
              Send Us Your CV
            </h2>
          </span>
          <span className="flex flex-col md:flex-row md:items-center text-center md:text-left">
            <p className="text-gray-600 font-Manrope">
              Please submit your CV to:
            </p>
            <a
              href="mailto:nextgeninfratechs@gmail.com"
              className="text-[#24aa4a] hover:underline md:px-2 font-Manrope"
            >
              hr1@nextgeninfratech.in
            </a>
          </span>
          <span className="flex flex-col md:flex-row md:items-center text-center md:text-left mt-2">
            <p className="text-gray-600 font-Manrope">
              For any inquiries, please contact us at:
            </p>
            <a
              href="tel:1234567890"
              className="text-[#24aa4a] hover:underline md:px-2 font-Manrope"
            >
              +91 7977763010
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
