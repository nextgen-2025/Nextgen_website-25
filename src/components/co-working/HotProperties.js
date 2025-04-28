// src/components/HotProperties.js
import React from 'react';
//import allCities     from '../assets/allCities.jpg';
import workspace        from '../../assets/banner.webp';
import privateCabin  from '../../assets/_6_08290-Enhanced-NR (1).jpg';
import Desk          from '../../assets/Dedicated Desk 3.jpg';
import classroom     from '../../assets/Picture2.png';

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

const HotProperties = () => (
  <section className="py-8 px-4">
    <h2 className="text-3xl font-bold text-center">
      <span className="text-blue-500">Hot </span>
      <span className="text-green-500">Properties</span>
    </h2>

    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {properties.map(({ id, title, src }) => (
        <div
          key={id}
          className="w-64 h-40 relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 px-2 py-1">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HotProperties;
