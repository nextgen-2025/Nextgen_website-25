import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

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
    <section className="bg-gray-50 testimonial-area2">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-0 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:px-5">
            <h2 className="text-4xl font-bold tracking-tight text-green-500 sm:text-4xl text-start font-Manrope">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-white text-start text-lg font-Manrope">
              Our clients have shared their experiences with us, and we couldn't
              be prouder of their kind words.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
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
                className="rounded-full border border-green-600 p-3 text-green-600 transition hover:bg-green-600 hover:text-white"
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
              {/* Slide 1 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600 sm:text-3xl font-Manrope text-start">
                        Yeasin Arafat
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700 text-start font-Manrope">
                        As a freelancer, finding a space that fuels my
                        creativity was essential. This coworking space has
                        exceeded my expectations! The vibrant atmosphere and
                        supportive community have helped me stay motivated and
                        inspired. I love the networking events and workshops
                        that allow me to connect with other amazing women in
                        business. It’s more than just a workspace; it’s a place
                        where I can thrive!
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 font-Manrope">
                    &mdash; Designer, LLCG Team
                  </footer>
                </blockquote>
              </div>

              {/* Slide 2 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600 sm:text-3xl text-start font-Manrope">
                        Anjali Gupta
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700 text-start font-Manrope">
                        I started my own marketing agency, and working from home
                        was isolating. This coworking space has transformed my
                        work life! The professional environment helps me focus,
                        and I’ve made incredible connections with other female
                        entrepreneurs. Plus, the amenities are fantastic! I
                        can’t imagine going back to my home office. It’s truly a
                        hub for collaboration and support.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 font-Manrope">
                    &mdash; CTO
                  </footer>
                </blockquote>
              </div>

              {/* Slide 3 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600 sm:text-3xl text-start font-Manrope">
                        John Smith
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700 text-start font-Manrope">
                        Joining this coworking space was one of the best
                        decisions I’ve made for my startup. The atmosphere is
                        electric, and I’m surrounded by like-minded
                        professionals who are eager to share ideas. The
                        resources available, from meeting rooms to tech support,
                        have been invaluable in helping me grow my business. It
                        feels great to be part of a community that motivates and
                        challenges me.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 font-Manrope">
                    &mdash; Developer, Tech Co
                  </footer>
                </blockquote>
              </div>

              {/* Slide 3 */}
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="size-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-green-600 sm:text-3xl text-start font-Manrope">
                        Priya Patel
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700 text-start font-Manrope">
                        I was tired of working from coffee shops and needed a
                        more focused environment. This coworking space provides
                        just that! The layout is designed for productivity, and
                        the networking opportunities have opened doors I didn’t
                        even know existed. I’ve formed valuable partnerships
                        with other members, and the collaborative spirit here is
                        contagious. I highly recommend it to anyone looking to
                        take their work to the next level!
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6 font-Manrope">
                    &mdash; Manager, Business Inc
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
