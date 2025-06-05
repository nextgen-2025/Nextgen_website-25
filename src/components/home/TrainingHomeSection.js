import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaDatabase, FaCloud } from "react-icons/fa";

const TrainingHomeSection = () => {
  const courses = [
    {
      title: ".NET Development",
      description: "Master C# and .NET framework development",
      icon: <FaLaptopCode className="text-4xl text-teal-400" />,
    },
    {
      title: "Java Full Stack",
      description: "End-to-end Java development with Spring Boot",
      icon: <FaDatabase className="text-4xl text-teal-400" />,
    },
    {
      title: "Cloud Computing",
      description: "AWS, Azure, and modern cloud technologies",
      icon: <FaCloud className="text-4xl text-teal-400" />,
    },
  ];

  const spaces = [
    {
      title: "Dedicated Classroom",
      image: "/Traningroom/Dedicatedclassrooms.jpeg",
      description:
        "High-capacity classrooms equipped with modern tech, ideal for lectures and workshops.",
      capacity: "Accommodates up to 30 learners",
    },
    {
      title: "Conference Room",
      image: "/space-cards/Training Room.webp",
      description:
        "Executive-style conference rooms perfect for team meetings, seminars, and training sessions.",
      capacity: "Seats up to 50 attendees",
    },
    {
      title: "Private Cabin",
      image: "/space-cards/Private Office.webp",
      description:
        "Quiet, distraction-free cabins designed for personalized coaching and compact group sessions.",
      capacity: "Ideal for up to 10 participants",
    },
  ];

  return (
    <div className="bg-[#131A26] text-white py-10 sm:py-16 md:py-20">
      {/* Training Spaces Section */}
      <section className="bg-gray-900 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide">
              STATE-OF-THE-ART FACILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Next-Gen Training Spaces
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              Fully equipped, tech-enabled spaces designed to elevate learning,
              collaboration, and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {spaces.map((space, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{space.title}</h3>
                  <p className="text-gray-300 mb-2 text-sm sm:text-base">{space.description}</p>
                  <p className="text-teal-400 font-semibold text-sm sm:text-base">
                    {space.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Courses Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Featured Courses</h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
                Comprehensive training programs designed to enhance your skills and career prospects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 sm:p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="mb-4">{course.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">{course.description}</p>
                  <Link
                    to="/training"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm sm:text-base"
                  >
                    Learn more
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              to="/training"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg inline-flex items-center gap-2 transition-colors text-sm sm:text-base"
            >
              View All Courses
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingHomeSection;
