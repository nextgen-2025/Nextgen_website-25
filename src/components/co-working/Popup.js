import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Popup = ({ isOpen, onClose, selectedSpace }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>

        {selectedSpace && (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={spaceImages[selectedSpace.title]?.[0]}
                  alt={selectedSpace.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{selectedSpace.title}</h2>
              <p className="text-gray-600 mb-6">{selectedSpace.description}</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>High Speed Internet</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Free Tea & Coffee</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Modern Amenities</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </button>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>


              </div>
            </div>
       
        )}
      </div>
    </div>
  );
};

export default Popup;
