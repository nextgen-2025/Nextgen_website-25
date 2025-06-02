import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaDatabase, FaCloud, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const TrainingHomeSection = () => {
  const courses = [
    {
      title: '.NET Development',
      description: 'Master C# and .NET framework development',
      icon: <FaLaptopCode className="text-4xl text-teal-400" />
    },
    {
      title: 'Java Full Stack',
      description: 'End-to-end Java development with Spring Boot',
      icon: <FaDatabase className="text-4xl text-teal-400" />
    },
    {
      title: 'Cloud Computing',
      description: 'AWS, Azure, and modern cloud technologies',
      icon: <FaCloud className="text-4xl text-teal-400" />
    }
  ];

  const spaces = [
    {
      title: 'Dedicated Classroom',
      image: '/Traningroom/Dedicatedclassrooms.jpeg',
      description: 'Fully equipped training rooms for efficient learning',
      capacity: 'Up to 30 students'
    },
    {
      title: 'Conference Room',
      image: '/space-cards/Training Room.webp',
      description: 'Professional spaces for workshops and seminars',
      capacity: 'Up to 50 people'
    },
    {
      title: 'Private Cabin',
      image: '/space-cards/Private Office.webp',
      description: 'Focused environment for small group training',
      capacity: 'Up to 10 people'
    }
  ];

  return (
    <div className="bg-[#131A26] text-white py-16 px-16">
              {/* Training Spaces Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
              STATE-OF-THE-ART FACILITIES
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Training Spaces
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Equipped with the latest technology and designed for optimal learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-9">
            {spaces.map((space, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={space.image} 
                  alt={space.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                  <p className="text-gray-300 mb-2">{space.description}</p>
                  <p className="text-teal-400 font-semibold">{space.capacity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/training"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Explore Our Facilities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section className="mb-20">
        <div className="container mx-auto px-10 py-6">
          <div className="text-center mb-12">
            <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
              PROFESSIONAL TRAINING PROGRAMS
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advance Your Career with Expert Training
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Industry-leading courses with hands-on practice and expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-9">
            {courses.map((course, index) => (
              <div key={index} 
                className="bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-700"
              >
                <div className="mb-6 text-center">{course.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{course.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{course.description}</p>
                <div className="text-center">
                  <Link 
                    to="/training" 
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Learn more
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/training"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              Explore Our Facilities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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