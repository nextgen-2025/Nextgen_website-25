import React from "react";

const TeamValues = () => {
  return (
    <section className="teamvalues-bg bg-fixed text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl text-[#28aa4a] font-bold text-center py-10">
          Our Values & Mission
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 pb-20">
          {/* Mission Section */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
            <h3 className="text-5xl md:text-3xl font-thin mb-4 font-lato">Our Mission</h3>
            <p className="text-gray-200 font-Manrope">
              We strive to empower our community through innovative solutions
              and collaborative efforts, fostering an environment of creativity
              and growth.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
            <h3 className="text-5xl md:text-3xl font-thin mb-4 font-lato">Our Values</h3>
            <ul className="list-disc list-inside text-gray-50 grid grid-cols-2 md:grid-cols-3 gap-5 col-span-2 font-Manrope">
              <li className="flex items-center">
                <img src="./values-img-t/1.png" alt="integrity" width="50" />
                <span>Integrity</span>
              </li>
              <li className="flex items-center">
                <img src="./values-img-t/2.png" alt="integrity" width="50" />
                <span>Collaboration</span>
              </li>
              <li className="flex items-center">
                <img src="./values-img-t/3.png" alt="integrity" width="50" />
                <span>Innovation</span>
              </li>
              <li className="flex items-center col-span-1">
                <img src="./values-img-t/4.png" alt="integrity" width="50" />
                <span>Diversity</span>
              </li>
              <li className="flex items-center col-span-1">
                <img src="./values-img-t/5.png" alt="integrity" width="50" />
                <span>Excellence</span>
              </li>
              <li className="flex items-center col-span-1">
                <img src="./values-img-t/6.png" alt="integrity" width="50" />
                <span>Sustainability</span>
              </li>
            </ul>
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Values"
              className="mt-4 rounded-md shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
