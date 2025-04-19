import React from 'react';

const TrainingSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
          {/* Left Column */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Empower Your Skills with Our IT Training Programs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're a beginner or looking to advance your career, our IT training programs will equip you with the knowledge and skills to thrive in today's fast-paced digital world.
            </p>
            <div className="space-x-4">
              <a 
                href="#"
                className="inline-block bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
                Explore Courses
              </a>
              <a 
                href="#"
                className="inline-block text-green-500 font-semibold py-2 px-6 rounded-full border-2 border-green-500 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your actual image
              alt="Training"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
