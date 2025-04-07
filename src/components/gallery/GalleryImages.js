import React, { useState } from "react";

const GalleryImages = () => {
  const images = [
    { src: "/nxtgn_office.webp", alt: "Nextgen Office Lobby" },
    { src: "/gallery/3.jpeg", alt: "Building Entry" },
    { src: "/gallery/2.jpeg", alt: "Team Meet" },
    { src: "/gallery/4.jpeg", alt: "Meeting Room" },
    { src: "/gallery/5.jpeg", alt: "Conference Room" },
    { src: "/gallery/6.jpeg", alt: "Break Room" },
    { src: "/gallery/7.jpeg", alt: "Team" },
    { src: "/gallery/8.jpeg", alt: "Co-working Space" },
    { src: "/gallery/9.jpeg", alt: "Reception" },
    { src: "/gallery/11.jpeg", alt: "Office Space" },
    { src: "/gallery/12.jpeg", alt: "Office Space" },
    { src: "/gallery/13.jpeg", alt: "Team Members" },
    { src: "/gallery/14.jpeg", alt: "Managing Director" },
    { src: "/gallery/15.jpeg", alt: "Team Meet" },
    { src: "/gallery/16.jpeg", alt: "Team Meet" },
    { src: "/gallery/17.jpeg", alt: "Managing Director" },
    { src: "/gallery/18.jpeg", alt: "Managing Director" },
    { src: "/gallery/19.jpeg", alt: "Digital Marketig Manager" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="max-w-[1440px] my-3 mx-auto grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image, index) => {
          let gridClass = "";

          if (index === 0) {
            gridClass =
              "col-span-2 row-span-3 md:col-span-2 md:row-span-3 lg:col-span-3";
          } else if (index === 1) {
            gridClass = "md:col-span-2 md:row-span-2";
          } else if (index === 8) {
            gridClass = "hidden lg:block";
          }

          return (
            <div
              key={index}
              className={`relative inline-block align-top text-base ${gridClass}`}
              onClick={() => openModal(index)} // Open modal when image is clicked
            >
              <div className="relative text-white overflow-hidden h-full group cursor-pointer">
                <div className="relative h-full">
                  {/* Hover effect for background and showing alt text */}
                  <div className="absolute inset-0 z-10 bg-black/50 opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center justify-center">
                    <p className="text-white text-lg font-bold font-Manrope tracking-wider">
                      {image.alt}
                    </p>
                  </div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center w-full pt-10"
          onClick={closeModal} // Close modal when clicked outside the image
        >
          <div
            className="relative p-4  lg:mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicked inside modal
          >
            <div className="absolute right-10 lg:right-20 top-4 z-50 cursor-pointer ">
              <i
                className="fa fa-close text-white text-3xl hover:text-red-600"
                onClick={closeModal}
              />
            </div>
            <div className="flex justify-between items-center mb-0">
              <button
                onClick={prevImage}
                className="text-white lg:text-2xl bg-[#28aa4a] p-2 rounded-full lg:mr-3"
              >
                <i className="fa fa-angle-left" />
              </button>

              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-72 lg:w-full h-auto max-h-[70vh] lg:object-contain"
              />
              <button
                onClick={nextImage}
                className="text-white lg:text-2xl bg-[#28aa4a] p-2 rounded-full lg:ml-3"
              >
                <i className="fa fa-angle-right" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="hidden lg:block">
              <div className="flex overflow-x-auto mt-4 space-x-2 w-full ">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`cursor-pointer p-1 border-2 border-transparent ${
                      currentImageIndex === index
                        ? "border-white"
                        : "hover:border-white"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-10 h-10 lg:w-16 lg:h-16 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
