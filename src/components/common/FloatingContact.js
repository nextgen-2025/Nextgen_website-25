import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import supportImage from '../../assets/support.png'; // Adjust path as needed

const FloatingContact = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const location = useLocation();
  
  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're near the footer (within 100px of bottom)
    const isNearFooter = documentHeight - (currentScrollY + windowHeight) < 100;
    
    // Determine scroll direction
    const isScrollingUp = currentScrollY < lastScrollY;
    
    // Update states
    setIsScrollingUp(isScrollingUp);
    setLastScrollY(currentScrollY);
    
    // Show button only when not near footer
    setShowButton(!isNearFooter);
  }, [lastScrollY]);

  useEffect(() => {
    // Only apply delay on home page
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (isHomePage) {
      // Set a timeout to show the button after animation
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // Show immediately on other pages
      setShowButton(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  if (!showButton) return null;
  
  return (
    <div 
      className="fixed bottom-8 right-8 flex flex-row items-center z-50 transition-all duration-300 ease-in-out"
      style={{
        opacity: showButton ? 1 : 0,
        transform: showButton ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: showButton ? 'auto' : 'none'
      }}
    >
      <Link 
        to="/contact" 
        className="flex items-center bg-[#2DD4BF] text-white px-5 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-[#21b858] mr-3 hover:scale-105"
        aria-label="Contact Us"
      >
        <div className="p-1 rounded-sm mr-3">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <span className="font-medium text-base">
          Contact Us
        </span>
      </Link>
      
      <Link 
        to="/contact" 
        className="w-14 h-14 bg-[#28aa4a] rounded-full flex justify-center items-center text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
        aria-label="Quick Contact"
      >
        <img 
          src={supportImage} 
          alt="Support" 
          className="w-8 h-8 object-contain"
          width="32"
          height="32"
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default React.memo(FloatingContact);