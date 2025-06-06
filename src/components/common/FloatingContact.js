import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import supportImage from '../../assets/support.png'; // Adjust path as needed

const FloatingContact = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
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
    setHasScrolled(true);
    
    // Show button only when not near footer
    setShowButton(!isNearFooter);
  }, [lastScrollY]);

  useEffect(() => {
    // Only apply scroll-based visibility on home page
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (isHomePage) {
      // Show button only after user has scrolled
      setShowButton(hasScrolled);
    } else {
      // Show immediately on other pages
      setShowButton(true);
    }
  }, [location.pathname, hasScrolled]);

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
        className="flex items-center bg-[#2DD4BF] text-white px-4 py-3 rounded-md shadow-lg transition-all duration-300 hover:bg-[#4075769a] mr-3"
        aria-label="Contact Us"
      >
        <span className="font-medium text-base">
          Contact Us
        </span>
      </Link>
      
      <Link 
        to="/contact" 
        className="w-14 h-14 bg-[#377c7c7e] rounded-full flex justify-center items-center text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
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