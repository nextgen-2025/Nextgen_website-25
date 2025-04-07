import React from "react";

const CareerHome = () => {
  return (
    <div>
      <div className="flex flex-col md:items-start md:mx-20 mx-2 mt-20 bg-white ">
        <h1 className="text-4xl font-bold text-[#24aa4a] font-lato">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-700 mb-6 py-2 font-Manrope">
          We are looking for talented individuals to help us shape the future.
          If you are passionate and driven, we want to hear from you!
        </p>
        <div className="flex flex-col items-center md:items-start">
          <span>
            <h2 className="text-2xl font-semibold text-[#24aa4a] text-start mb-2 font-lato">
              Send Us Your CV
            </h2>
          </span>
          <span className="flex flex-row md:flex-row md:items-center">
            <p className="text-gray-600 font-Manrope">
              Please submit your CV to:
            </p>
            <a
              href="mailto:nextgeninfratechs@gmail.com"
              className="text-[#24aa4a] hover:underline md:px-2 font-Manrope"
            >
              nextgeninfratechs@gmail.com
            </a>
          </span>
          <span className="flex flex-row md:flex-row md:items-center">
            <p className="text-gray-600 font-Manrope">
              For any inquiries, please contact us at:
            </p>
            <a
              href="tel:1234567890"
              className="text-[#24aa4a] hover:underline md:px-2 font-Manrope"
            >
              +91 1234567890
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
