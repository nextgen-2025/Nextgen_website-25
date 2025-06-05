import React from 'react';
import { Link } from 'react-router-dom';
import { FaWifi, FaDesktop, FaCoffee, FaPhoneAlt, FaLock, FaPrint } from 'react-icons/fa';

const CoworkingSpaceContent = () => {
  const amenities = [
    { icon: <FaWifi />, title: 'High-Speed Internet', description: 'Enterprise-grade WiFi for seamless connectivity' },
    { icon: <FaDesktop />, title: 'Modern Workstations', description: 'Ergonomic furniture with power outlets' },
    { icon: <FaCoffee />, title: 'Breakout Areas', description: 'Cafeteria and relaxation zones' },
    { icon: <FaPhoneAlt />, title: 'Meeting Rooms', description: 'Fully equipped conference facilities' },
    { icon: <FaLock />, title: '24/7 Access', description: 'Secure entry with CCTV surveillance' },
    { icon: <FaPrint />, title: 'Business Center', description: 'Printing and administrative support' },
  ];

  const spaces = [
    {
      title: 'Dedicated Desk',
      image: './space-cards/Dedicated Desk.webp',
      description: 'Your personal workspace in a collaborative environment',
    },
    {
      title: 'Private Cabin',
      image: './space-cards/Private Office.webp',
      description: 'Enclosed office space for teams and privacy',
    },
    {
      title: 'Meeting Room',
      image: './space-cards/Training Room.webp',
      description: 'Professional spaces for client meetings and team discussions',
    },
  ];

  return (
    <section className="bg-[#131A26] text-white py-8 sm:py-16 md:py-20" aria-label="Coworking Spaces">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide block">
            PREMIUM COWORKING SPACES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Your Perfect Workspace Solution
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Experience the future of work with our state-of-the-art coworking spaces designed for productivity and collaboration.
          </p>
        </div>

        {/* Workspace Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {spaces.map((space, index) => (
            <article 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105"
              aria-labelledby={`space-title-${index}`}
            >
              <img 
                src={space.image} 
                alt={`${space.title} - ${space.description}`} 
                className="w-full h-48 sm:h-56 md:h-64 object-cover" 
              />
              <div className="p-4 sm:p-6">
                <h3 id={`space-title-${index}`} className="text-xl font-semibold mb-2">{space.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{space.description}</p>
                <Link 
                  to="/coworking" 
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm sm:text-base"
                  aria-label={`Learn more about ${space.title}`}
                >
                  Learn more
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Premium Amenities</h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">Everything you need for a productive workday</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-teal-500 transition-all duration-300"
              role="article"
              aria-labelledby={`amenity-title-${index}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500 opacity-5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative flex flex-col items-center z-10">
                <div className="text-teal-400 text-2xl sm:text-3xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {amenity.icon}
                </div>
                <div>
                  <h3 
                    id={`amenity-title-${index}`} 
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-teal-400 transition-colors duration-300"
                  >
                    {amenity.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/coworking"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg inline-flex items-center gap-2 transition-colors text-sm sm:text-base"
          >
            Explore All Spaces
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoworkingSpaceContent;