import React from 'react';
import { Link } from 'react-router-dom';
import supportImage from '../../assets/support.png'; // Adjust path as needed

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-row items-center z-50">
      <Link 
        to="/contact" 
        className="flex items-center bg-[#21b858] text-white px-5 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-[#21b858] mr-3 hover:scale-100"
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
        className="w-14 h-14 bg-[#2563EB] rounded-full flex justify-center items-center text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
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