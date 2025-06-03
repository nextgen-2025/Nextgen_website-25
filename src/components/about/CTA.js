import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#141C2B] py-20 px-4 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Join Our Growing Team!
        </h2>
        <p className="text-white text-lg md:text-xl mb-8">
          If you’re passionate about making an impact and thrive in a
          collaborative environment, we want to hear from you! Explore our
          open positions and start your journey with us today.
        </p>
        <Link
          to="/careers"
          className="inline-block bg-[#0D9488] hover:bg-[#1b6d66] text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
};

export default CTA;
