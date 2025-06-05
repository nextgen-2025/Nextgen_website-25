const WhyChooseUsWorking = () => {
  const images = [
    { src: "./chooseus/5.jpg", alt: "Modern Office Space" },
    { src: "./chooseus/2.jpg", alt: "Collaborative Area" },
    { src: "./chooseus/3.jpg", alt: "Meeting Room" },
    { src: "./chooseus/4.jpg", alt: "Work Environment" }
  ];

  const features = [
    {
      title: "Modern Amenities",
      description: "Enjoy fully equipped, ergonomically designed workspaces with all the modern comforts to enhance productivity and comfort."
    },
    {
      title: "24/7 Secure Access",
      description: "Work on your own terms with round-the-clock access, secured by top-notch security systems to ensure your safety at all times."
    },
    {
      title: "Housekeeping Service",
      description: "Focus on your work while we take care of cleanliness. Our dedicated housekeeping team ensures a spotless and professional environment."
    },
    {
      title: "Community Events",
      description: "Join a vibrant network of like-minded professionals through regular community events that foster collaboration and growth."
    },
    {
      title: "Prime Location",
      description: "Situated in Navi Mumbai's key business hubs, our office spaces offer easy access to transportation, dining, and commercials."
    },
    {
      title: "High-Speed Internet",
      description: "Stay connected with lightning-fast internet that ensures uninterrupted workflow and seamless virtual communication."
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="flex justify-center items-center w-full"
    >
      <div className="choose-container w-full bg-gradient-to-r from-gray-900 to-gray-800 py-8 text-white px-6">
        <div>
          <div className="my-10 text-center">
            <h2 className="text-3xl font-heading font-semibold mb-5">
              Find Your Ideal Workspace
            </h2>
            <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between w-full px-3 md:px-24 mt-8">
            <div className="grid grid-cols-2 gap-4 w-full lg:w-[40%]">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="lazy img-fluid animated-image w-full h-[190px] md:h-[215px] object-cover rounded-lg shadow-md"
                />
              ))}
            </div>

            <div className="mt-5 lg:mt-0 lg:ml-0 w-full lg:w-[50%] h-full flex items-center">
              <div className="grid md:grid-cols-2 gap-4 h-full min-h-[480px] text-teal-400">
                {features.map((feature, index) => (
                  <div key={index} className="choose-us-text text-left">
                    <h4 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWorking;
