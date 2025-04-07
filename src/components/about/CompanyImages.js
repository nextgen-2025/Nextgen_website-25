import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyImages = () => {
  useEffect(() => {
    const horizontalSections = gsap.utils.toArray(".horizontal-section");
    const container = document.querySelector("#container");
    gsap.context(() => {
      // Apply horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + container.offsetWidth,
          //   markers: true, // Debugging markers
          onComplete: (self) => self.kill(), // Ensure it cleans up
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <main id="container" style={{ overflowX: "hidden" }}>
      {/* <section className="horizontal-section">
        <h1 className="heading">Horizontal Scroll</h1>
      </section> */}
      <section className="horizontal-section">
        <h1 className="heading text-6xl md:text-9xl font-extrabold text-white">
          What we Offer
        </h1>
      </section>
      <section className="horizontal-section">
        <h1 className="heading text-6xl md:text-9xl font-extrabold text-white">
          Co-Working Space
        </h1>
      </section>
      <section className="horizontal-section">
        <h1 className="heading text-6xl md:text-9xl font-extrabold text-white">
          Real Estate
        </h1>
      </section>
      <section className="horizontal-section">
        <h1 className="heading text-6xl md:text-9xl font-extrabold text-white">
          IT Services
        </h1>
      </section>

      <section className="horizontal-section">
        <h1 className="heading text-6xl md:text-9xl font-extrabold text-white">
          Digital Marketing
        </h1>
      </section>
      {/* <section className="horizontal-section">
        <h1 className="heading">03</h1>
      </section> */}
    </main>
  );
};

export default CompanyImages;
