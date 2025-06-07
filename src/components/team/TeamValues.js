import React from "react";

const values = [
  { label: "Integrity", icon: "./values-img-t/1.png" },
  { label: "Collaboration", icon: "./values-img-t/2.png" },
  { label: "Innovation", icon: "./values-img-t/3.png" },
  { label: "Diversity", icon: "./values-img-t/4.png" },
  { label: "Excellence", icon: "./values-img-t/5.png" },
  { label: "Sustainability", icon: "./values-img-t/6.png" },
];

const TeamValues = () => {
  return (
    <section className="relative bg-[#141C2B] bg-fixed text-white py-24 px-4 md:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl text-white font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Our Values & Mission
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="group bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1">
            <h3 className="text-2xl text-teal-400 mb-6 font-semibold group-hover:text-teal-300 transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              We strive to empower our community through innovative solutions
              and collaborative efforts, fostering an environment of creativity
              and growth.
            </p>
          </div>

          {/* Values */}
          <div className="group bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1">
            <h3 className="text-2xl text-teal-400 mb-8 font-semibold group-hover:text-teal-300 transition-colors duration-300">
              Our Values
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div 
                  key={idx} 
                  className="group/item flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-0 group-hover/item:opacity-25 transition duration-500"></div>
                    <img
                      src={value.icon}
                      alt={value.label}
                      width="40"
                      height="40"
                      className="relative shrink-0 transform transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>
                  <span className="text-gray-100 font-medium group-hover/item:text-teal-400 transition-colors duration-300">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full blur-sm"></div>
    </section>
  );
};

export default TeamValues;
