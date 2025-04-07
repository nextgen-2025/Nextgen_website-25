import React from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
      {/* <!-- CTA --> */}
      <section className="cta">
        <div className="container text-center">
          <h2 className="text-white text-3xl font-bold font-lato">
            Join Our Growing Team!
          </h2>
          <p className="text-white text-2xl font-Manrope">
            If you’re passionate about making an impact and thrive in a
            collaborative environment, we want to hear from you! Explore our
            open positions and start your journey with us today.
          </p>
          <Link to="/careers" className="btn btn-primary font-Manrope">
            View Open Positions
          </Link>
        </div>
      </section>
      {/* <!-- CTA --> */}
    </div>
  );
};

export default CTA;
