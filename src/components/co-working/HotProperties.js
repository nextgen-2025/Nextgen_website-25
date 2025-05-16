// src/components/HotProperties.js
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//import allCities     from '../assets/allCities.jpg';
import workspace        from '../../assets/webp/banner.webp';
import privateCabin  from '../../assets/webp/6_08290-Enhanced-NR-_1_.webp';
import Desk          from '../../assets/webp/Dedicated-Desk-3.webp';
import classroom     from '../../assets/webp/Picture2.webp';

// 2) Bundle into one object for easy reference:
const images = {
  //allCities,
  workspace,
  privateCabin,
  Desk,
  classroom,
};

// 3) Define your array of "hot" items — each with its own image:
const properties = [
  { id: 1, title: 'Workspace',     src: images.workspace },
  { id: 2, title: 'Private Cabin', src: images.privateCabin },
  { id: 3, title: 'Dedicated Desk',src: images.Desk },
  { id: 4, title: 'Classroom',     src: images.classroom },
  //{ id: 5, title: 'All Cities',    src: images.allCities },
];

const HotProperties = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set a small delay to improve perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center">
        <span className="text-blue-500">Marketable </span>
        <span className="text-green-500">Workrooms</span>
      </h2>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {properties.map(({ id, title, src }) => (
          <div
            key={id}
            className={`w-64 h-40 relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
          >
            <LazyLoadImage
              src={src}
              alt={title}
              effect="blur"
              threshold={300}
              className="w-full h-full object-cover"
              width="100%"
              height="100%"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 px-2 py-1">
              <h3 className="text-white text-lg font-semibold">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotProperties;
