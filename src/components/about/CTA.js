import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative bg-[#141C2B] py-24 px-4 md:px-12 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Join Our Growing Team!
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          If you're passionate about making an impact and thrive in a
          collaborative environment, we want to hear from you! Explore our
          open positions and start your journey with us today.
        </p>
        <Link
          to="/careers"
          className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#0D9488] to-[#0D9488]/90 hover:from-[#0D9488]/90 hover:to-[#0D9488] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5"
        >
          <span>View Open Positions</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full blur-sm"></div>
    </section>
  );
};

export default CTA;
