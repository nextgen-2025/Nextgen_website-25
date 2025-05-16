import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const SpaceCard = ({ image, title, description, price, link }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set a small delay to improve perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
    >
      <div className="h-48 overflow-hidden">
        <LazyLoadImage
          src={image}
          alt={title}
          effect="blur"
          threshold={300}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          width="100%"
          height="100%"
          placeholderSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmUyZTIiLz48L3N2Zz4="
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold">{price}</span>
          <Link
            to={link}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;