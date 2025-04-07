import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const CardCarousel = () => {
  // Example data for each card
  const cards = [
    {
      id: 1,
      image: "/banner.jpg", // Keep the same image URL
      category: "Office Space", // Updated category
      author: "Kanchan Gosavi",
      date: "July 7, 2024",
      description:
        "Explore the innovative office spaces designed for productivity and collaboration. The ideal environment for coworking and IT services.",
    },
    {
      id: 2,
      image: "/blog-banner.jpg", // Keep the same image URL
      category: "Coworking", // Updated category
      author: "Kanchan Gosavi",
      date: "June 30, 2024",
      description:
        "Discover the future of coworking spaces and how they are transforming the way we work. Insights on shared office spaces and IT support.",
    },
    {
      id: 3,
      image: "/Banner-vedio-poster.png", // Keep the same image URL
      category: "IT Services", // Updated category
      author: "Kanchan Gosavi",
      date: "August 1, 2024",
      description:
        "A deep dive into IT services for modern office spaces, ensuring seamless operations and high-tech collaboration solutions.",
    },
  ];

  return (
    <div className="w-full py-5 relative">
      <h1 className="text-start py-2 font-semibold text-[#616189] font-Manrope text-xl">
        Featured Posts
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        loop={true}
        centeredSlides={true}
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        autoplay={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
        }}
        className="swiper-container"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-lg shadow-xl mb-6 w-full h-72">
              <div className="relative w-full h-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={card.image}
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
              </div>
              <div className="absolute bottom-10 z-20 w-full text-center px-4">
                <div className="absolute bottom-56 text-start bg-[#ffffff7a] w-fit px-2 rounded-2xl">
                  <p>{card.category}</p>
                </div>
                <div className="flex items-center gap-2 text-sm justify-start">
                  <h2 className="text-base font-medium text-white">
                    {card.author}
                  </h2>
                  <p className="text-white">{card.date}</p>
                </div>
                <p className="text-base text-start text-white mt-2">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-button-next text-blue-400 hover:text-blue-500 absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl bg-white rounded-full p-2">
        <i className="fa fa-angle-right" />
      </div>
      <div className="swiper-button-prev text-blue-400 hover:text-blue-500 absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl bg-white rounded-full p-2">
        <i className="fa fa-angle-left" />
      </div>
    </div>
  );
};

export default CardCarousel;
