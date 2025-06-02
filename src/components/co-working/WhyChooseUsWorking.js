const WhyChooseUsWorking = () => {
  return (
    <section
      id="why-choose-us"
      className="flex justify-center items-center w-full"
    >
      <div className="choose-container w-full bg-gradient-to-r from-gray-900 to-gray-800 py-8 text-white">
        <div>
          <div className="my-10 text-center">
            <h2 className="text-3xl font-heading font-semibold mb-5">
              Find Your Ideal Workspace
            </h2>
            <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between w-full px-3 md:px-24 mt-8">
            <div className="grid grid-cols-2 gap-4 w-full lg:w-[40%]">
              <img
                src="./chooseus/5.jpg"
                className="lazy img-fluid animated-image w-full h-[190px] md:h-[215px] object-cover rounded-lg shadow-md"
                alt=""
              />
              <img
                src="./chooseus/2.jpg"
                className="lazy img-fluid animated-image w-full h-[190px] md:h-[215px] object-cover rounded-lg shadow-md"
                alt=""
              />
              <img
                src="./chooseus/3.jpg"
                className="lazy img-fluid animated-image w-full h-[190px] md:h-[215px] object-cover rounded-lg shadow-md"
                alt=""
              />
              <img
                src="./chooseus/4.jpg"
                className="lazy img-fluid animated-image w-full h-[190px] md:h-[215px] object-cover rounded-lg shadow-md"
                alt=""
              />
            </div>

            <div className="mt-5 lg:mt-0 lg:ml-0 w-full lg:w-[50%] h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-4 h-full min-h-[480px] text-teal-400">

                <div className="choose-us-text text-teal-400 text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Modern Amenities
                  </h4>
                  <p className="text-gray-300">
                    Enjoy fully equipped, ergonomically designed workspaces with
                    all the modern comforts to enhance productivity and comfort.
                  </p>
                </div>
                <div className="choose-us-text text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    24/7 Secure Access
                  </h4>
                  <p className="text-gray-300">
                    Work on your own terms with round-the-clock access, secured
                    by top-notch security systems to ensure your safety at all
                    times.
                  </p>
                </div>
                <div className="choose-us-text text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Housekeeping Service
                  </h4>
                  <p className="text-gray-300">
                    Focus on your work while we take care of cleanliness. Our
                    dedicated housekeeping team ensures a spotless and
                    professional environment.
                  </p>
                </div>
                <div className="choose-us-text text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Community Events
                  </h4>
                  <p className="text-gray-300">
                    Join a vibrant network of like-minded professionals through
                    regular community events that foster collaboration and
                    growth.
                  </p>
                </div>
                <div className="choose-us-text text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    Prime Location
                  </h4>
                  <p className="text-gray-300">
                    Situated in Navi Mumbai's key business hubs, our office
                    spaces offer easy access to transportation, dining, and
                    commercials.
                  </p>
                </div>
                <div className="choose-us-text text-left">
                  <h4 className="text-lg font-semibold mb-1">
                    High-Speed Internet
                  </h4>
                  <p className="text-gray-300">
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
