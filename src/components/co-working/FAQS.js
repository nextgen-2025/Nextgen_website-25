import React, { useState } from "react";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of memberships are available?",
      answer:
        "We offer a range of membership options, monthly subscriptions, and long-term leases. Each package is designed to fit different needs and preferences.",
    },
    {
      question: "Are the workspaces fully furnished?",
      answer:
        "Yes, all our office spaces come fully furnished with ergonomic chairs, desks, and high-speed internet. Additional amenities such as printers and meeting room equipment are also available.",
    },
    {
      question: "Is parking available at your locations?",
      answer:
        "Yes, we provide convenient parking options at most of our locations. For specific details, please contact our office.",
    },
    {
      question: "What amenities are included?",
      answer:
        "Our spaces include high-speed Wi-Fi, printing services, conference room access, and more.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto pt-12">
      <div id="faq" className="mb-12">
        <div className="text-center mb-8">
          <h2 className="font-heading text-4xl mb-5">FAQ's</h2>
          <div className="border-b-2 border-teal-500 w-16 mx-auto"></div>
          <p className="text-gray-700 md:text-2xl py-2 md:py-0">
            At NextGen Infratech, we understand that choosing the right
            coworking space is a big decision. To help you make an informed
            choice, we have compiled answers to some of the most frequently
            asked questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="md:min-h-[300px] mr-3 md:mr-0">
            <div className="our-faqs-images">
              <div className="our-faqs-images-row">
                <div className="pb-1">
                  <div className="faq-img faqs-img-1">
                    <figure className="image-anime reveal">
                      <img src="./faq/1.jpg" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="pb-1">
                  <div className="faq-img-1 faqs-img-2">
                    <figure className="image-anime reveal">
                      <img src="./faq/2.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="flex items-start lg:justify-around">
                <div className="">
                  <div className="faq-img faqs-img-1">
                    <figure className="image-anime reveal">
                      <img src="./faq/3.jpg" alt="" />
                    </figure>
                  </div>
                </div>
                <div className="">
                  <div className="faq-img-1 faqs-img-2">
                    <figure className="image-anime reveal">
                      <img src="./faq/4.jpg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="our-faqs-bulitup">
                <img src="./nextgen-profile-logo.jpg" alt="" />
              </div> 
            </div>
          </div>

          <div className="w-full lg:w-[60%] h-auto">
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="md:py-2">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-2xl md:text-3xl font-extralight">
                      {faq.question}
                    </span>
                    <span className="text-gray-600">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 text-gray-700 text-start">{faq.answer}</p>
                  </div>
                  {/* Border under the answer */}
                  <div
                    className={`border-b border-gray-300 transition-all duration-300 ease-in-out ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .faq-img img {
          width: 200px;
        }

        .faq-img-1 img {
          width: 170px;
        }
      `}</style>
    </div>
  );
};

export default FAQS;
