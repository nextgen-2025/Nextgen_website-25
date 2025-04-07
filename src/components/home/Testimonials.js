import React, { useEffect, useState, useCallback } from "react";
import "../customcss/testimonials.css";

const testimonials = [
  {
    text: "As a freelancer, finding a space that fuels my creativity was essential. This coworking space has exceeded my expectations! The vibrant atmosphere and supportive community have helped me stay motivated and inspired. I love the networking events and workshops that allow me to connect with other amazing women in business. It’s more than just a workspace; it’s a place where I can thrive!",
    name: "Yeasin Arafat",
    role: "Designer, LLCG Team",
    videoLink: "#",
    image: "./profile/1.png",
  },
  {
    text: "I started my own marketing agency, and working from home was isolating. This coworking space has transformed my work life! The professional environment helps me focus, and I’ve made incredible connections with other female entrepreneurs. Plus, the amenities are fantastic! I can’t imagine going back to my home office. It’s truly a hub for collaboration and support.",
    name: "Anjali Gupta",
    role: "CTO",
    videoLink: "#",
    image: "./profile/2.png",
  },
  {
    text: "Joining this coworking space was one of the best decisions I’ve made for my startup. The atmosphere is electric, and I’m surrounded by like-minded professionals who are eager to share ideas. The resources available, from meeting rooms to tech support, have been invaluable in helping me grow my business. It feels great to be part of a community that motivates and challenges me.",
    name: "John Smith",
    role: "Developer, Tech Co",
    videoLink: "#",
    image: "./profile/1.png",
  },
  {
    text: "I was tired of working from coffee shops and needed a more focused environment. This coworking space provides just that! The layout is designed for productivity, and the networking opportunities have opened doors I didn’t even know existed. I’ve formed valuable partnerships with other members, and the collaborative spirit here is contagious. I highly recommend it to anyone looking to take their work to the next level!",
    name: "Priya Patel",
    role: "Manager, Business Inc",
    videoLink: "#",
    image: "./profile/2.png",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerSlide = window.innerWidth >= 768 ? 2 : 1;

  const handleNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= Math.ceil(testimonials.length / itemsPerSlide)
        ? 0
        : nextIndex;
    });
  }, [itemsPerSlide]);

  useEffect(() => {
    const interval = !isHovered && setInterval(handleNextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, handleNextSlide]);

  return (
    <section className="testimonial-area bg-[#1f8a3c] py-8">
      <div className="container">
        <div className="sec-title white-title text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold font-lato tracking-normal uppercase">
            Testimonials
          </h2>
          <p className="text-4xl md:text-5xl font-normal font-lato tracking-normal lg:pt-2">
            What Client Say About Us?
          </p>
        </div>
        <div className="testimonial-slider relative z-10 overflow-hidden ">
          <div
            className="testimonial-content flex transition-transform duration-500 cursor-grab"
            style={{
              transform: `translateX(-${
                currentIndex *
                (100 / Math.ceil(testimonials.length / itemsPerSlide))
              }%)`,
              width: `${Math.ceil(testimonials.length / itemsPerSlide) * 100}%`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => (
              <div
                className="single-testimonial flex flex-col items-start md:mx-6 md:w-[507px] my-5 md:my-0"
                key={index}
                style={{
                  width: `${100 / (testimonials.length / itemsPerSlide)}%`,
                }}
              >
                <div className="round-1 round"></div>
                <div className="round-2 round"></div>
                <p className="lg:h-60 font-thin font-Manrope text-justify">
                  {testimonial.text}
                </p>
                <div className="client-info flex items-center mt-4">
                  <div className="client-video mr-3">
                    <a href={testimonial.videoLink}>
                      <img
                        src={testimonial.image}
                        alt=""
                        className="rounded-full w-20 h-12"
                      />
                    </a>
                  </div>
                  <div className="client-details">
                    <h6>{testimonial.name}</h6>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container text-center mt-6">
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerSlide),
          }).map((_, index) => (
            <span
              key={index}
              className={`dot3 ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <style>{`
        .dots-container {
          text-align: center;
          margin-top: 40px;
        }
        .dot3 {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: white; /* Inactive dot color */
          cursor: pointer;
        }

        .dot3.active {
          background-color: black; /* Active dot color */
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
