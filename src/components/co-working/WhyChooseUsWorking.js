const WhyChooseUsWorking = () => {
  return (
    <section
      id="why-choose-us"
      className="flex justify-center items-center mt-10"
    >
      <div className="choose-container">
        <div>
          <div className="my-10 text-center">
            <h2 className="text-3xl font-heading mb-5">
              Find Your Ideal Workspace
            </h2>
            <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-start mx-3 md:mx-24 mt-8">
            <div className="grid grid-cols-2 gap-2">
              <img
                src="./chooseus/5.jpg"
                className="lazy img-fluid animated-image md:w-[800px] h-[190px] md:h-[215px] object-cover"
                alt=""
              />
              <img
                src="./chooseus/2.jpg"
                className="lazy img-fluid animated-image md:w-[800px] h-[190px] md:h-[215px] object-cover"
                alt=""
              />
              <img
                src="./chooseus/3.jpg"
                className="lazy img-fluid animated-image md:w-[800px] h-[190px] md:h-[215px] object-cover"
                alt=""
              />
              <img
                src="./chooseus/4.jpg"
                className="lazy img-fluid animated-image md:w-[800px] h-[190px] md:h-[215px] object-cover"
                alt=""
              />
            </div>

            <div className="lg:ml-10 mt-5 lg:mt-0 mx-2 md:mx-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    Modern Amenities
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Enjoy fully equipped, ergonomically designed workspaces with
                    all the modern comforts to enhance productivity and comfort.
                  </p>
                </div>
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    24/7 Secure Access
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Work on your own terms with round-the-clock access, secured
                    by top-notch security systems to ensure your safety at all
                    times.
                  </p>
                </div>
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    Housekeeping Service
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Focus on your work while we take care of cleanliness. Our
                    dedicated housekeeping team ensures a spotless and
                    professional environment.
                  </p>
                </div>
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    Community Events
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Join a vibrant network of like-minded professionals through
                    regular community events that foster collaboration and
                    growth.
                  </p>
                </div>
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    Prime Location
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Situated in Navi Mumbai’s key business hubs, our office
                    spaces offer easy access to transportation, dining, and
                    commercial centers.
                  </p>
                </div>
                <div className="choose-us-text">
                  <h4 className="text-lg font-semibold text-start">
                    High-Speed Internet
                  </h4>
                  <p className="text-gray-600 text-justify">
                    Stay connected with lightning-fast internet that ensures
                    uninterrupted workflow and seamless virtual communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWorking;
