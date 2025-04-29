import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const SpaceCards = ({ filteredSpaces = [] }) => {
  const [activeImages, setActiveImages] = useState({});

  // Define multiple images for each space type
  const spaceImages = {
    "Dedicated Desk": [
      "./space-cards/c1.jpg",
      "./space-cards/Dedicated Desk 5.jpg",
      "./space-cards/Dedicated Desk.jpg"
    ],
    "Private Cabins": [
      "./space-cards/c3.jpg",
      "./space-cards/Private Office.jpg",
      "./space-cards/Cabin 2.jpg",
      
    ],
    "Meeting Room": [
      "./space-cards/c5.jpg",
      "./space-cards/Training Room.jpg",
      "./space-cards/_6_08245-Enhanced-NR (1).jpg"  
    ],
    "Conference Room": [
      "./space-cards/c2.jpg",
      "./space-cards/Cabin 2.jpg",
      "./space-cards/Private Office.jpg",
    ],
    "Training Room": [
      "./space-cards/c4.jpg",
      "./space-cards/Flexi Desk 2.jpg",
      "./space-cards/Training Room.jpg"
    ],
    "Mini Cabin": [
      "./space-cards/c6.jpg",
      "./space-cards/Cabin 2.jpg",
      "./space-cards/Private Office.jpg",
    ]
  };

  // Initialize active images
  useEffect(() => {
    const initialActiveImages = {};
    Object.keys(spaceImages).forEach(title => {
      initialActiveImages[title] = 0;
    });
    setActiveImages(initialActiveImages);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImages(prev => {
        const newState = { ...prev };
        Object.keys(newState).forEach(title => {
          newState[title] = (newState[title] + 1) % spaceImages[title].length;
        });
        return newState;
      });
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Space data
  const spaceData = [
    {
      title: "Dedicated Desk",
      description: "Flexible seating options designed for creative freelancers and those looking for a dynamic workspace",
    },
    {
      title: "Private Cabins",
      description: "For those who need privacy, our spacious, fully furnished cabins offer a focused work environment.",
    },
    {
      title: "Meeting Room",
      description: "Perfect for smaller discussions and collaborations, our meeting rooms provide a private, productive space.",
    },
    {
      title: "Conference Room",
      description: "Our conference rooms are fully equipped with high-speed internet, projectors, and other essential tools to ensure your meetings run smoothly.",
    },
    {
      title: "Training Room",
      description: "A specialized room equipped for team training, workshops, or seminars, providing a focused environment for learning and development.",
    },
    {
      title: "Mini Cabin",
      description: "Our Mini Cabins provide a private, cozy workspace perfect for individuals or small teams of up to 2 people, ensuring focused productivity.",
    },
  ];

  // Use filtered spaces if provided, otherwise use all spaces
  const spacesToDisplay = filteredSpaces.length > 0 ? filteredSpaces : spaceData;

  return (
    <section id="find-your-space" className="py-20">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-heading mb-5">
            Find Your Ideal Workspace
          </h2>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:mx-5">
          {spacesToDisplay.map((space, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group"
            >
              <div className="overflow-hidden relative h-64">
                {spaceImages[space.title]?.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${space.title} - Image ${imgIndex + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                      activeImages[space.title] === imgIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {spaceImages[space.title]?.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setActiveImages(prev => ({
                        ...prev,
                        [space.title]: dotIndex
                      }))}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImages[space.title] === dotIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">{space.title}</h4>
                  <a href="#quote_form">
                    <span className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg">
                      Get Quote
                    </span>
                  </a>
                </div>
                <p className="h-24 mb-4 text-gray-600 text-start leading-relaxed">
                  {space.description}
                </p>
                <ul className="ul-style-2 list-none space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> High Speed Internet
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Free Tea & Coffee
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span> Modern Amenities
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpaceCards;
