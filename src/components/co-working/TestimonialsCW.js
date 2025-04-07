import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Ravi S.",
    role: "Employee at CMS",
    img: "./profile/1.png",
    stars: 4,
    feedback:
      "NextGen Infratech has been a game-changer for our team. The flexible office solutions and collaborative environment have significantly boosted our productivity. Highly recommend!",
  },
  {
    name: "Ananya K.",
    role: "Manager at Fortis",
    img: "./profile/2.png",
    stars: 3,
    feedback:
      "The professional and modern spaces at NextGen Infratech have transformed our daily work routine. The amenities and support are top-notch. It's the perfect place for any growing business.",
  },
  {
    name: "Rajesh P.",
    role: "Manager at HCAH.",
    img: "./profile/1.png",
    stars: 4,
    feedback:
      "We love the versatility of the office spaces at NextGen Infratech. Whether we need a conference room for meetings or a quiet cabin for focused work, they always deliver.",
  },
  {
    name: "Vikram T.",
    role: "Manager at HDB",
    img: "./profile/1.png",
    stars: 5,
    feedback:
      "From day passes to long-term leases, NextGen Infratech offers the flexibility we need. The community vibe and excellent facilities make it a standout choice for our company.",
  },
  {
    name: "Sonia R.",
    role: "Manager at MyOperator",
    img: "./profile/2.png",
    stars: 5,
    feedback:
      "The virtual office option from NextGen Infratech has been perfect for our remote team. We get a professional business address and reliable mail handling without needing a physical office.",
  },
];

const TestimonialsCW = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let cardsToShow;

  if (window.innerWidth < 768) {
    cardsToShow = 1; // Show 1 card for screen widths below 768px
  } else if (window.innerWidth >= 768 && window.innerWidth < 900) {
    cardsToShow = 2; // Show 2 cards for screen widths between 768px and 900px
  } else {
    cardsToShow = 3; // Show 3 cards for screen widths above 900px
  }
  const testimonialRef = useRef(null);
  let autoSlideInterval = useRef(null);
  let startX = useRef(0);
  let isDragging = useRef(false);

  const displayedTestimonials = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    displayedTestimonials.push(testimonials[index]);
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    autoSlideInterval.current = setInterval(nextTestimonial, 3000);
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const handleMouseDown = (event) => {
    event.preventDefault();
    startX.current = event.clientX;
    isDragging.current = true;
    clearInterval(autoSlideInterval.current);

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const moveX = e.clientX - startX.current;
      const threshold = 50; // Minimum drag distance to trigger a slide

      if (moveX > threshold) {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
        isDragging.current = false;
      } else if (moveX < -threshold) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        isDragging.current = false;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      autoSlideInterval.current = setInterval(nextTestimonial, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <section id="testimonials" className="py-12 font-sans">
      <div className="container mx-auto">
        <div className="my-10 text-center">
          <h2 className="text-3xl font-heading mb-5">Testimonials</h2>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
        </div>
        <div className="flex flex-col items-center">
          <div
            ref={testimonialRef}
            className="relative w-full overflow-hidden cursor-grab"
            onMouseDown={handleMouseDown}
          >
            <div className="flex justify-center gap-5 transition-transform duration-300">
              {displayedTestimonials.map((testi, index) => (
                <div
                  key={index}
                  className="item flex-none w-full md:w-[32%] bg-white border border-[#28aa4a] rounded-lg shadow-lg p-6"
                >
                  <div className="profile flex items-center mb-4">
                    <img
                      src={testi.img}
                      alt={testi.name}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                    <div className="information pl-4">
                      <div className="stars flex">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa fa-star ${
                              i < testi.stars
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          ></i>
                        ))}
                      </div>
                      <p className="text-lg font-semibold">{testi.name}</p>
                      <span className="text-sm text-gray-500">
                        {testi.role}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-700 italic text-center">
                    "{testi.feedback}"
                  </p>
                  <div className="icon text-center">
                    <i className="fa fa-quote-right text-[#28aa4b6e] text-2xl"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentIndex === index ? "bg-[#28aa4a]" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCW;
