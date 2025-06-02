import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const SpaceCards = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to the workspace section
    if (location.state?.scrollTo === 'find-your-space') {
      const element = document.getElementById('find-your-space');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // If a specific space type was selected, scroll it into view
        if (location.state?.selectedType) {
          setTimeout(() => {
            const spaceElement = document.querySelector(`[data-space-type="${location.state.selectedType}"]`);
            if (spaceElement) {
              spaceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 500); // Small delay to ensure main section is scrolled first
        }
      }
    }
  }, [location.state?.scrollTo, location.state?.selectedType]);

  const [activeImages, setActiveImages] = useState({});

  // Wrap spaceImages in useMemo to prevent recreation on every render
  const spaceImages = useMemo(() => ({
    "Dedicated Desk": [
      "./space-cards/c1.jpg",
      "./space-cards/Dedicated Desk 5.webp",
      "./space-cards/Dedicated Desk.webp"
    ],
    "Private Cabins": [
      "./space-cards/c3.jpg",
      "./space-cards/Private Office.webp",
      "./space-cards/Cabin 2.webp",
      
    ],
    "Meeting Room": [
      "./space-cards/c5.jpg",
      "./space-cards/Training Room.webp",
      "./space-cards/_6_08245-Enhanced-NR (1).webp"  
    ],
    "Conference Room": [
      "./space-cards/c2.jpg",
      "./space-cards/Cabin 2.webp",
      "./space-cards/Private Office.webp",
    ],
    "Training Room": [
      "./space-cards/c4.jpg",
      "./space-cards/Flexi Desk 2.webp",
      "./space-cards/Training Room.webp"
    ],
    "Mini Cabin": [
      "./space-cards/c6.jpg",
      "./space-cards/Cabin 2.webp",
      "./space-cards/Private Office.webp",
    ]
  }), []);

  // Initialize active images
  useEffect(() => {
    const initialActiveImages = {};
    Object.keys(spaceImages).forEach(title => {
      initialActiveImages[title] = 0;
    });
    setActiveImages(initialActiveImages);
  }, [spaceImages]);

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
  });

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

  // Always show all spaces
  const spacesToDisplay = spaceData;

  return (
    <section id="find-your-space" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-5">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-heading text-white font-semibold mb-5">
            Find Your Ideal Workspace
          </h2>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:mx-5">
          {spacesToDisplay.map((space, index) => (
            <div
              key={index}
              data-space-type={space.title}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 group"
            >
              <div className="overflow-hidden relative h-64">
                {spaceImages[space.title]?.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${space.title} - ${imgIndex + 1}`}
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
                  <Link to="/contact">
                    <span className="bg-blue-600 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 text-sm sm:text-base rounded-lg cursor-pointer hover:bg-blue-500 transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
                      Get Quote
                    </span>
                  </Link>
                </div>
                <p className="h-24 mb-4 text-gray-600 text-start leading-relaxed">
                  {space.description}
                </p>
                <ul className="ul-style-2 list-none space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2"></span> High Speed Internet
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2"></span> Free Tea & Coffee
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2"></span> Modern Amenities
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
