import React, { useEffect } from "react";
import { gsap } from "gsap";

const REServices = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      const countUp = gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: counter.getAttribute("data-count") + "+",
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => countUp.kill();
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="mx-4 md:mx-0">
        <h2 className="text-[#28aa4a] font-Manrope text-xl font-semibold">
          Our Services
        </h2>
        <h1 className="font-Manrope font-extrabold text-gray-900 text-3xl md:text-5xl py-2">
          Elevating Your Real Estate Experience
        </h1>
        <p className="font-Manrope md:w-[750px] mx-auto py-2">
          {" "}
          Discover our comprehensive services: from modern co-working
          environments and expert construction to dynamic real estate marketing
          strategies, designed to enhance and streamline your real estate
          journey
        </p>
      </div>
      <div className="flex flex-col my-10">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
          {" "}
          <div className="">
            <div className="p-4 border rounded-lg shadow-md w-80 h-96">
              <div className="icon-box mb-4">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 114.1 122.88"
                  className="w-12"
                  fill="#28aa4a"
                >
                  <defs></defs>
                  <title>bulb</title>
                  <path
                    className="cls-1"
                    d="M75.84,27.1a35.68,35.68,0,0,1,8.61,7.09,32.45,32.45,0,0,1,5.76,9.26h0a36.84,36.84,0,0,1,1.85,6,34.64,34.64,0,0,1,.24,14,38.69,38.69,0,0,1-2.15,7.32l-.12.25c-2.06,5-5.59,9.86-9,14.66-1.75,2.42-3.48,4.82-4.94,7.15A4.69,4.69,0,0,1,71.73,95l-27.56,4.1A4.7,4.7,0,0,1,39,95.69a40.19,40.19,0,0,0-2.54-5.82,24.85,24.85,0,0,0-3-4.49c-1.43-1.63-2.88-3.29-4.29-5.2A40.42,40.42,0,0,1,25,73.24h0a41.08,41.08,0,0,1-2.81-8,35.84,35.84,0,0,1-.95-8.45v0A35.39,35.39,0,0,1,22.35,48a41.69,41.69,0,0,1,3.42-8.85l.2-.35a35.55,35.55,0,0,1,7.13-8.63,33.72,33.72,0,0,1,9.46-5.83l.28-.1a35.41,35.41,0,0,1,8-2.14,37.78,37.78,0,0,1,8.77-.2,39.14,39.14,0,0,1,8.4,1.71,38.44,38.44,0,0,1,7.79,3.49Zm-4,87.26a17.37,17.37,0,0,1-6.28,6.29,16.46,16.46,0,0,1-7.2,2.2A14.87,14.87,0,0,1,51,121.4a15.1,15.1,0,0,1-4.39-3.27l25.29-3.77Zm2.41-14.15,0,1.65,0,.58a22,22,0,0,1,0,3.25l-.49,2.39-30.64,4.56-.54-1.23-1.19-4.9,0-1.42,32.79-4.88ZM56.34,3.77A3.84,3.84,0,0,1,60.23,0h0l.27,0A3.84,3.84,0,0,1,64,3.89h0a1.27,1.27,0,0,1,0,.2l-.21,8.21h0a2.11,2.11,0,0,1,0,.26,3.84,3.84,0,0,1-3.87,3.54h0l-.27,0a3.84,3.84,0,0,1-3.53-3.88h0a1.09,1.09,0,0,1,0-.19l.2-8.25ZM14,18.15a3.84,3.84,0,0,1,2.47-6.66,3.83,3.83,0,0,1,2.76,1l6.16,5.73a3.91,3.91,0,0,1,1.22,2.68,3.82,3.82,0,0,1-1,2.76,3.86,3.86,0,0,1-2.67,1.22,3.8,3.8,0,0,1-2.76-1L14,18.15ZM3.92,60.48A3.86,3.86,0,0,1,0,56.75a3.84,3.84,0,0,1,3.73-4l8.41-.28a3.84,3.84,0,0,1,4,3.72v.06h0v.14a3.84,3.84,0,0,1-3.73,3.77h-.15l-8.3.27Zm106-11.92H110a3.84,3.84,0,0,1,2.66.86,3.81,3.81,0,0,1,1.4,2.59v0a.49.49,0,0,1,0,.13,3.84,3.84,0,0,1-3.44,4.06l-8.37.89a3.83,3.83,0,0,1-2.81-.85,3.84,3.84,0,0,1,2-6.8c2.79-.31,5.6-.63,8.4-.9ZM93.33,15.09A3.83,3.83,0,0,1,98.65,14h0a3.73,3.73,0,0,1,1.63,2.44,3.84,3.84,0,0,1-.58,2.88l-4.68,7A3.8,3.8,0,0,1,92.58,28a3.88,3.88,0,0,1-2.88-.57A3.92,3.92,0,0,1,88.06,25a3.84,3.84,0,0,1,.58-2.88l4.69-7ZM38.23,80.87A42.19,42.19,0,0,1,31,70.56,31.2,31.2,0,0,1,27.89,57,31.7,31.7,0,0,1,31.7,42.56a.47.47,0,0,0,.05-.1h0a27.5,27.5,0,0,1,13.4-11.71,29.65,29.65,0,0,1,13.93-2A32.09,32.09,0,0,1,72.39,33,27.43,27.43,0,0,1,84,46.2,28.85,28.85,0,0,1,84,68.45C81.31,75,75.15,82,71.11,88.4a1.67,1.67,0,0,0-.67,0L44.36,92.25a35,35,0,0,0-6.13-11.38Z"
                  />
                </svg>
              </div>
              <div className="text-start">
                <h3 className="text-xl font-semibold py-2">Construction</h3>
                <p className="text-gray-700">
                  Vishesh Group is known for crafting world-class residential
                  and commercial spaces, blending precision, innovation, and
                  sustainability in every project.
                </p>
              </div>
              <div className="border my-5"></div>
              <div className="why-choose-counter mt-4 text-start">
                <h3 className="text-2xl font-bold flex items-center">
                  <div
                    className="text-6xl font-thin counter"
                    data-count="10"
                  ></div>
                  +
                </h3>
                <p className="text-gray-600">project completed</p>
              </div>
            </div>
          </div>
          <div className="w-80 h-96 relative overflow-hidden group mb-6 cursor-pointer">
            <div className="why-choose-image ">
              <figure className="image-anime">
                <img
                  src="./RealEstate/why-choose-img-1.png"
                  alt=""
                  className="rounded-xl transition-transform duration-500 group-hover:scale-110 w-full h-auto"
                />
              </figure>
            </div>
          </div>
          <div className="">
            <div className="p-4 border rounded-lg shadow-md w-80 h-96">
              <div className="icon-box mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#24aa4a"
                  className="w-14"
                  viewBox="0 0 64 64"
                >
                  <g data-name="17 quality" id="_17_quality">
                    <path d="M40.4,20.57a1.009,1.009,0,0,0-.95-.69H34.48l-1.53-4.72a1,1,0,0,0-1.9,0l-1.53,4.72H24.55a1.009,1.009,0,0,0-.95.69.991.991,0,0,0,.37,1.12l4.01,2.92-1.53,4.72a1,1,0,0,0,.36,1.12,1.022,1.022,0,0,0,1.18,0L32,27.53l4.01,2.92a1.086,1.086,0,0,0,.59.19,1.036,1.036,0,0,0,.59-.19,1,1,0,0,0,.36-1.12l-1.53-4.72,4.01-2.92A.991.991,0,0,0,40.4,20.57Zm-6.14,2.85a1.006,1.006,0,0,0-.37,1.12l.81,2.48-2.11-1.54a1.011,1.011,0,0,0-1.18,0L29.3,27.02l.81-2.48a1.006,1.006,0,0,0-.37-1.12l-2.11-1.54h2.61a.991.991,0,0,0,.95-.69L32,18.71l.81,2.48a.991.991,0,0,0,.95.69h2.61Z" />

                    <path d="M32,10.26a13.239,13.239,0,0,0-1.13,26.43c.38.03.75.05,1.13.05.34,0,.69-.02,1.03-.05h.1v-.01A13.234,13.234,0,0,0,32,10.26Zm9.81,18.72a.01.01,0,0,0-.01.01,11.191,11.191,0,0,1-8.85,5.7l-.01.01h-.01a9.1,9.1,0,0,1-1.88-.01,11.236,11.236,0,1,1,10.76-5.71Z" />

                    <path d="M58.88,52.73,55.12,46.9q-4.035-6.225-8.06-12.47c.21-.08.45-.17.69-.25a4.179,4.179,0,0,0,2.67-1.8,4.179,4.179,0,0,0-.25-3.19,4.06,4.06,0,0,1-.37-1.63,3.96,3.96,0,0,1,1.01-1.25,4.234,4.234,0,0,0,1.64-2.81,4.19,4.19,0,0,0-1.64-2.8,4.091,4.091,0,0,1-1.01-1.26,4.06,4.06,0,0,1,.37-1.63,4.157,4.157,0,0,0,.25-3.18,4.2,4.2,0,0,0-2.67-1.8,4.218,4.218,0,0,1-1.49-.71,4.362,4.362,0,0,1-.36-1.61,4.191,4.191,0,0,0-1.15-3,4.2,4.2,0,0,0-3.17-.45,4.081,4.081,0,0,1-1.65,0,4.051,4.051,0,0,1-1.01-1.27,4.212,4.212,0,0,0-2.37-2.23,4.132,4.132,0,0,0-3.02.96A4.143,4.143,0,0,1,32,5.25a4.143,4.143,0,0,1-1.53-.73,4.122,4.122,0,0,0-3.01-.96,4.2,4.2,0,0,0-2.38,2.23,4.2,4.2,0,0,1-1,1.27,4.136,4.136,0,0,1-1.66,0,4.174,4.174,0,0,0-3.16.45,4.164,4.164,0,0,0-1.16,3.01,3.961,3.961,0,0,1-.37,1.6,3.944,3.944,0,0,1-1.47.7,4.226,4.226,0,0,0-2.68,1.8,4.179,4.179,0,0,0,.25,3.19,4.06,4.06,0,0,1,.37,1.63,4.091,4.091,0,0,1-1.01,1.26,4.19,4.19,0,0,0-1.64,2.8,4.234,4.234,0,0,0,1.64,2.81,3.96,3.96,0,0,1,1.01,1.25,4.06,4.06,0,0,1-.37,1.63,4.157,4.157,0,0,0-.25,3.18,4.142,4.142,0,0,0,2.67,1.8c.23.09.47.17.69.26Q12.905,40.67,8.88,46.9L5.12,52.73a.981.981,0,0,0,.01,1.1.992.992,0,0,0,1.01.42l6.83-1.27,1.66,6.76a1,1,0,0,0,.81.74.875.875,0,0,0,.16.02.985.985,0,0,0,.84-.46L27.22,43.35c.08.02.15.07.23.09a2.2,2.2,0,0,0,.5.06,5.009,5.009,0,0,0,2.52-1.02A4.143,4.143,0,0,1,32,41.75a4.143,4.143,0,0,1,1.53.73,4.1,4.1,0,0,0,3.03.96c.08-.02.15-.07.22-.09L47.56,60.04a.985.985,0,0,0,.84.46.875.875,0,0,0,.16-.02,1,1,0,0,0,.81-.74l1.66-6.76,6.83,1.27a1,1,0,0,0,1.01-.42A.981.981,0,0,0,58.88,52.73ZM16.02,57l-1.33-5.41a1,1,0,0,0-1.15-.75L8.06,51.86l2.5-3.87q3.75-5.82,7.52-11.64a.784.784,0,0,1,.02.14,4.191,4.191,0,0,0,1.15,3,4.205,4.205,0,0,0,3.17.45,4.081,4.081,0,0,1,1.65,0,3.935,3.935,0,0,1,1.01,1.27c.19.29.38.58.58.86ZM36.4,41.29a.7.7,0,0,1-.3.2c-.28.06-1.02-.39-1.5-.7A5.071,5.071,0,0,0,32,39.75a5.071,5.071,0,0,0-2.6,1.04c-.48.31-1.22.77-1.49.71a.828.828,0,0,1-.32-.22,6.488,6.488,0,0,1-.81-1.13,5.026,5.026,0,0,0-1.83-2.01,3.246,3.246,0,0,0-1.45-.29,11.376,11.376,0,0,0-1.3.1c-.62.07-1.46.17-1.7-.02s-.34-1.04-.41-1.66a5.025,5.025,0,0,0-.79-2.64,1.7,1.7,0,0,0-.27-.27,1.249,1.249,0,0,0-.12-.09l-.01-.01h-.01a6.3,6.3,0,0,0-1.98-.97c-.59-.21-1.39-.49-1.53-.79-.14-.28.14-1.07.34-1.65a4.932,4.932,0,0,0,.43-2.73,4.848,4.848,0,0,0-1.55-2.23c-.44-.44-1.05-1.05-1.05-1.39s.61-.95,1.05-1.39a4.848,4.848,0,0,0,1.55-2.23,4.932,4.932,0,0,0-.43-2.73c-.2-.58-.48-1.37-.34-1.66s.95-.57,1.54-.78a4.864,4.864,0,0,0,2.37-1.34,4.91,4.91,0,0,0,.8-2.63c.07-.62.16-1.46.41-1.66s1.08-.1,1.7-.03a5.007,5.007,0,0,0,2.75-.19,4.956,4.956,0,0,0,1.83-2.01c.33-.54.79-1.27,1.12-1.34.28-.07,1.02.4,1.5.7A5.071,5.071,0,0,0,32,7.25a5.071,5.071,0,0,0,2.6-1.04c.48-.3,1.21-.76,1.5-.7.33.07.79.8,1.12,1.34a4.956,4.956,0,0,0,1.83,2.01,5.007,5.007,0,0,0,2.75.19c.62-.07,1.46-.17,1.7.02s.34,1.04.41,1.66a5.025,5.025,0,0,0,.79,2.64,5.024,5.024,0,0,0,2.39,1.35c.59.2,1.39.48,1.53.78.14.28-.14,1.07-.34,1.65a4.932,4.932,0,0,0-.43,2.73,4.848,4.848,0,0,0,1.55,2.23c.44.44,1.05,1.05,1.05,1.39s-.61.95-1.05,1.39a4.848,4.848,0,0,0-1.55,2.23,4.932,4.932,0,0,0,.43,2.73c.2.58.48,1.37.34,1.66s-.95.58-1.53.78a6.074,6.074,0,0,0-2.07,1.02,3.107,3.107,0,0,0-.31.32,4.91,4.91,0,0,0-.8,2.63c-.07.62-.16,1.46-.41,1.66s-1.08.1-1.7.03a4.916,4.916,0,0,0-2.75.19,5.026,5.026,0,0,0-1.83,2.01A6.464,6.464,0,0,1,36.4,41.29Zm14.06,9.55a1,1,0,0,0-1.15.75L47.98,57,38.34,42.07c.2-.28.39-.57.58-.86a4.07,4.07,0,0,1,1-1.27,4.136,4.136,0,0,1,1.66,0,4.174,4.174,0,0,0,3.16-.45,4.157,4.157,0,0,0,1.16-3,.675.675,0,0,1,.02-.14q3.765,5.82,7.52,11.64l2.5,3.87Z" />
                  </g>
                </svg>
              </div>
              <div className="why-choose-content text-start">
                <h3 className="text-xl font-semibold py-2">Co-working Space</h3>
                <p className="text-gray-700">
                  Our modern co-working spaces promote creativity and
                  productivity, offering flexible workstations, meeting rooms,
                  and high-speed internet.
                </p>
              </div>
              <div className="border my-5"></div>
              <div className="why-choose-counter text-start">
                <h3 className="text-2xl font-bold flex items-center">
                  <div
                    className="text-6xl font-thin counter"
                    data-count="50"
                  ></div>
                  +
                </h3>
                <p className="text-gray-600">project completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
          <div className="mt-2">
            <div className="why-choose-image rounded-lg w-80 h-96 overflow-hidden group mb-6 cursor-pointer">
              <figure className="image-anime">
                <img
                  src="./RealEstate/why-choose-img-2.png"
                  alt=""
                  className="rounded-xl transition-transform duration-500 group-hover:scale-110 w-full h-auto"
                />
              </figure>
            </div>
          </div>

          <div className="wow fadeInUp ">
            <div className="p-4 border rounded-lg shadow-md w-80 h-[392px]">
              <div className="icon-box mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14"
                  fill="#24aa4a"
                  viewBox="0 0 24 24"
                >
                  <g id="ic-real-estate-flat">
                    <path
                      className="cls-1"
                      d="M4,2h8a2,2,0,0,1,2,2V22a0,0,0,0,1,0,0H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2Z"
                    />

                    <path
                      className="cls-2"
                      d="M14,10h6a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H14"
                    />

                    <line className="cls-1" x1="5" y1="6" x2="6" y2="6" />

                    <line className="cls-1" x1="9" y1="6" x2="11" y2="6" />

                    <line className="cls-1" x1="5" y1="10" x2="6" y2="10" />

                    <line className="cls-1" x1="9" y1="10" x2="11" y2="10" />

                    <line className="cls-1" x1="5" y1="14" x2="6" y2="14" />

                    <line className="cls-1" x1="9" y1="14" x2="11" y2="14" />

                    <line className="cls-1" x1="5" y1="18" x2="6" y2="18" />

                    <line className="cls-1" x1="9" y1="18" x2="11" y2="18" />

                    <line className="cls-1" x1="17" y1="14" x2="19" y2="14" />

                    <line className="cls-1" x1="17" y1="18" x2="19" y2="18" />
                  </g>
                </svg>
              </div>
              <div className="why-choose-content text-start">
                <h3 className="text-xl font-semibold py-2">
                  Real Estate Marketing
                </h3>
                <p className="text-gray-700">
                  We provide full real estate marketing services using
                  data-driven strategies and cutting-edge technology to help you
                  buy, sell, or lease properties.
                </p>
              </div>
              <div className="border my-4"></div>
              <div className="why-choose-counter mt-4 text-start">
                <h3 className="text-2xl font-bold flex items-center">
                  <div
                    className="text-6xl font-thin counter"
                    data-count="150"
                  ></div>
                  +
                </h3>
                <p className="text-gray-600">project completed</p>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="why-choose-image w-80 h-96 overflow-hidden group mb-6 cursor-pointer">
              <figure className="image-anime">
                <img
                  src="./RealEstate/why-choose-img-3.png"
                  alt=""
                  className="rounded-xl transition-transform duration-500 group-hover:scale-110 w-full h-auto"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REServices;
