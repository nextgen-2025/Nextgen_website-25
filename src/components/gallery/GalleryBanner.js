import React from "react";
import "../customcss/gallery.css";

const GalleryBanner = () => {
  return (
    <div>
      <div
        className="gallery-bnr-cont flex justify-center bg-center bg-fixed relative overflow-hidden w-full h-[40vh] md:h-[60vh]
    "
      >
        <div className="text-white flex flex-col justify-center items-center mx-auto mt-10 md:mt-0">
          <h1 className="text-6xl lg:text-[180px] font-extrabold tracking-wide drop-in font-serif text-transparent">
            Gallery
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
