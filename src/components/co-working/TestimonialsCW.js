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
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 6000);
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const getVisibleCards = () => {
    return testimonials.slice(currentIndex, currentIndex + 2).concat(
      testimonials.length - currentIndex < 2
        ? testimonials.slice(0, 2 - (testimonials.length - currentIndex))
        : []
    );
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What Our Members Say</h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleCards.map((testi, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-2xl p-8 border-2 border-teal-400 shadow-xl transition hover:shadow-2xl"
            >
              <div className="flex items-center mb-4 space-x-2 text-teal-400 text-xl">
                {Array.from({ length: testi.stars }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-2">{testi.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">"{testi.feedback}"</p>
              <p className="text-teal-300 text-right font-semibold">— {testi.role}</p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i * 2 ? "bg-teal-400 scale-110" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(i * 2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCW;
