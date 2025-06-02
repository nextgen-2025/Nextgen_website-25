import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of memberships are available?",
      answer: "We offer flexible membership options including:",
      details: [
        "Daily/Weekly hot desk passes",
        "Monthly dedicated desk memberships",
        "Private cabin leases",
        "Virtual office packages",
        "Meeting room packages"
      ]
    },
    {
      question: "Are the workspaces fully furnished?",
      answer: "Yes, all our office spaces come equipped with:",
      details: [
        "Ergonomic chairs and adjustable desks",
        "High-speed fiber internet",
        "Modern meeting room facilities",
        "Printing and scanning equipment",
        "Storage solutions"
      ]
    },
    {
      question: "Is parking available at your locations?",
      answer: "Yes, we provide comprehensive parking solutions:",
      details: [
        "Dedicated parking spots for monthly members",
        "Visitor parking spaces",
        "Secure bicycle storage",
        "24/7 parking access",
        "EV charging stations"
      ]
    },
    {
      question: "What amenities are included?",
      answer: "Our spaces include premium amenities:",
      details: [
        "High-speed Wi-Fi (1 Gbps)",
        "Fully equipped conference rooms",
        "Pantry with complimentary beverages",
        "24/7 access and security",
        "Cleaning and maintenance services",
        "Business address and mail handling"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-white">FAQ's</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At NextGen Infratech, we understand that choosing the right
            coworking space is a big decision. To help you make an informed
            choice, we have compiled answers to some of the most frequently
            asked questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* FAQ Images Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="./faq/1.jpg"
                  alt="Office Space"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="./faq/2.jpg"
                  alt="Meeting Room"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="./faq/3.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="./faq/4.jpg"
                  alt="Amenities"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:w-1/2 text-left">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      className="text-teal-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 mb-3">{faq.answer}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                          {faq.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;