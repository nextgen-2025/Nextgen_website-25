import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const texts = [
  {
    heading: "Working",
    subheading: "Space",
    paragraph: "Experience premium coworking spaces in Navi Mumbai with flexible office solutions, dedicated desks, private cabins, and meeting rooms. Our modern workspaces feature high-speed internet, 24/7 access, professional amenities, and a vibrant community perfect for startups and enterprises.",
    link: "/coworking",
    icon: "🏢",
    ariaLabel: "Coworking Space Services"
  },
  {
    heading: "Digital",
    subheading: "Marketing",
    paragraph: "Transform your online presence with our comprehensive digital marketing services. We specialize in SEO, social media marketing, content strategy, PPC campaigns, and analytics-driven solutions to boost your brand visibility and drive measurable results.",
    link: "/digtal-marketing",
    icon: "📱",
    ariaLabel: "Digital Marketing Services"
  },
  {
    heading: "IT",
    subheading: "Services",
    paragraph: "Elevate your business with our end-to-end IT solutions including software development, cloud services, cybersecurity, and IT consulting. Our expert team delivers custom technology solutions to drive innovation and operational efficiency.",
    link: "/it-services",
    icon: "💻",
    ariaLabel: "IT Services"
  },
  {
    heading: "Real",
    subheading: "Estate",
    paragraph: "Discover prime commercial and residential properties in Navi Mumbai. Our real estate services include property consulting, buying, selling, and leasing solutions with a focus on premium locations and excellent investment opportunities.",
    link: "/real-estate",
    icon: "🏠",
    ariaLabel: "Real Estate Services"
  },
];

const ServicesText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 850);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-8" aria-label="Our Services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-teal-400 font-medium text-sm tracking-wider">OUR SERVICES</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" id={`service-heading-${index}`}>
              <span className="text-teal-400">{texts[index].heading}</span>{" "}
              <span>{texts[index].subheading}</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{texts[index].paragraph}</p>
            <Link 
              to={texts[index].link}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300"
              aria-label={`Learn more about ${texts[index].heading} ${texts[index].subheading}`}
            >
              Explore more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* Service Icons */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {texts.map((text, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`p-4 rounded-lg flex items-center gap-3 transition-all ${index === i ? 'bg-teal-500' : 'bg-gray-800/50 hover:bg-gray-700/50'}`}
                  aria-label={text.ariaLabel}
                  aria-pressed={index === i}
                >
                  <span className="text-2xl" role="img" aria-hidden="true">{text.icon}</span>
                  <span className="text-white text-sm font-medium">{text.heading} {text.subheading}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex lg:hidden gap-2 mt-4">
            {texts.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${index === i ? 'bg-teal-500 w-8' : 'bg-gray-600'}`}
                aria-label={`Select slide ${i + 1}`}
                aria-pressed={index === i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesText;
