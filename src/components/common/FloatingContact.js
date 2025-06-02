import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import supportImage from '../../assets/support.png'; // Adjust path as needed

const FloatingContact = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Only apply delay on home page
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (isHomePage) {
      // Set a timeout to show the button after animation (adjust time as needed)
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3000); // 3 seconds delay - adjust based on your animation duration
      
      return () => clearTimeout(timer);
    } else {
      // Show immediately on other pages
      setShowButton(true);
    }
  }, [location.pathname]);
  
  if (!showButton) return null;
  
  return (
    <div className="fixed bottom-8 right-8 flex flex-row items-center z-50">
      <Link 
        to="/contact" 
        className="flex items-center bg-[#2DD4BF] text-white px-5 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-[#21b858] mr-3 hover:scale-100"
      >
        <div className="p-1 rounded-sm mr-3">
          <i className="fa fa-envelope"></i>
        </div>
        <span className="font-medium text-base">
          Contact Us
        </span>
      </Link>
      
      <Link 
        to="/contact" 
        className="w-14 h-14 bg-[#28aa4a] rounded-full flex justify-center items-center text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
      >
        <img 
          src={supportImage} 
          alt="Support" 
          className="w-8 h-8 object-contain"
        />
      </Link>
    </div>
  );
};

export default FloatingContact;