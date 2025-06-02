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
    <div className="bg-[#131A26] text-white py-8">
      <div className="container mx-auto px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-semibold text-lg mb-3 tracking-wide">
            PREMIUM COWORKING SPACES
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Perfect Workspace Solution
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience the future of work with our state-of-the-art coworking spaces designed for productivity and collaboration.
          </p>
        </div>

        {/* Workspace Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 px-16">
          {spaces.map((space, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img src={space.image} alt={space.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{space.title}</h3>
                <p className="text-gray-300 mb-4">{space.description}</p>
                <Link 
                  to="/coworking" 
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

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 gap-8 px-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-800 bg-opacity-50 rounded-lg">
              <div className="text-teal-400 text-2xl mr-4">
                {amenity.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-300">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/coworking"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
          >
            Explore All Spaces
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoworkingSpaceContent;