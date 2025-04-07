import React from "react";

const REProjects = () => {
  const cardsData = [
    {
      image: "/RealEstate/service-img-1.png",
      title: "Balaji Symphony",
      description:
        "A luxurious residential community offering modern amenities and stylish living spaces, designed for comfort and convenience.",
    },
    {
      image: "/RealEstate/service-img-2.png",
      title: "Evara",
      description:
        "A cutting-edge commercial development designed to enhance business operations with state-of-the-art facilities.",
    },
    {
      image: "/RealEstate/service-img-3.png",
      title: "Avante",
      description:
        "A visionary project blending contemporary design with sustainability, providing exceptional living and working environments.",
    },
    {
      image: "/RealEstate/service-img-4.png",
      title: "Nextgen Infratech",
      description:
        "A state-of-the-art commercial building designed for dynamic business environments with advanced infrastructure and flexible office spaces.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center mt-10 py-10 bg-[#24aa4a11]">
      <img
        src="./RealEstate/our-service-bg.png"
        alt="bg"
        className="absolute right-0 top-0 h-full"
      />
      <div>
        <h2 className="text-[#28aa4a] font-Manrope text-xl font-semibold">
          Our Projects
        </h2>
        <h1 className="font-Manrope font-extrabold text-gray-900 text-5xl py-2">
          Explore Our Landmark Developments
        </h1>
        <p className="font-Manrope md:w-[750px] mx-auto py-2">
          Our projects, such as Balaji Symphony, Evara, and Avante, reflect our
          commitment to quality, innovation, and customer satisfaction
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 p-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="relative group w-full md:w-64 h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out "
            />
            <div className="absolute inset-0 bg-[#0000009f] bg-opacity-75 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-start py-10 items-center text-center">
              <h3 className="mb-2 transition-transform duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0 font-Manrope text-2xl font-extrabold tracking-wider text-white">
                {card.title}
              </h3>
              <p className="text-white mb-4 transition-transform duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0 text-justify font-Manrope px-7 py-3 text-lg">
                {card.description}
              </p>
              {/* <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-transform duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                Read More
              </button> */}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-full group-hover:hidden img-projects-re">
              <h3 className="font-Manrope text-2xl font-extrabold tracking-wider text-white">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default REProjects;
