import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Yeasin Arafat",
    role: "Designer, LLCG Team",
    text: "The coworking space has exceeded my expectations! The vibrant atmosphere and supportive community have helped me stay motivated. It's more than just a workspace; it's a place where I can thrive!"
  },
  {
    name: "Anjali Gupta",
    role: "CTO",
    text: "This coworking space has transformed my work life! The professional environment helps me focus, and I've made incredible connections with other entrepreneurs. The amenities are fantastic!"
  },
  {
    name: "John Smith",
    role: "Developer, Tech Co",
    text: "One of the best decisions for my startup! The atmosphere is electric, and I'm surrounded by like-minded professionals. The resources available have been invaluable for my business growth."
  }
];

const TestimonialsNew = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize KeenSlider
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    // Button controls
    const prevButton = document.getElementById("keen-slider-previous-desktop");
    const nextButton = document.getElementById("keen-slider-next-desktop");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => slider.prev());
      nextButton.addEventListener("click", () => slider.next());
    }

    // Cleanup on unmount
    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", () => slider.prev());
        nextButton.removeEventListener("click", () => slider.next());
      }
      slider.destroy();
    };
  }, []);

  return (
    <section className="bg-[#131A26] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-teal-400 font-semibold text-base sm:text-lg mb-3 tracking-wide">
              CLIENT TESTIMONIALS
            </h2>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Don't just take our word for it...
            </h1>

            <p className="text-gray-300 text-base sm:text-lg">
              Our clients have shared their experiences with us, and we couldn't
              be prouder of their kind words.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-teal-500 p-3 text-teal-500 transition hover:bg-teal-500 hover:text-white transform hover:scale-110 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-teal-500 p-3 text-teal-500 transition hover:bg-teal-500 hover:text-white transform hover:scale-110 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 lg:mx-0">
            <div
              ref={sliderRef}
              id="keen-slider"
              className="keen-slider cursor-grab"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex min-w-[200px] h-full flex-col justify-between bg-gray-800 p-4 sm:p-6 lg:p-8 shadow-lg rounded-xl border-l-4 border-teal-400 transition-transform duration-300">
                    <div>
                      <div className="flex gap-0.5 text-teal-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="size-4 sm:size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-3 sm:mt-4">
                        <p className="text-xl sm:text-2xl font-bold text-teal-400">
                          {testimonial.name}
                        </p>

                        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-300">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-3 sm:mt-4 text-sm font-medium text-teal-300">
                      &mdash; {testimonial.role}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
