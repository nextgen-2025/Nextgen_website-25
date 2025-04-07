import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/landing";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServiceCards from "../components/home/ServiceCards";
import ServicesText from "../components/home/ServicesText";
import ContactFrom from "../components/home/ContactFrom";
import Footer from "../components/home/Footer";
// import ClientLogo from "../components/home/ClientLogo";
// import Testimonial from "../components/home/Testimonials";
import CallSection from "../components/home/CallSection";
import About from "../components/home/AboutHome";
import BackToTop from "../components/BackToTop/BackToTop";
import ClientsLogoStatic from "../components/home/ClientsLogoStatic";
import Loader from "../components/loader/Loader";
import BlogSection from "../components/blogs/BlogCard";
import TestimonialsNew from "../components/home/TestimonialsNew";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleVideoLoad = () => {
    setIsLoading(false); // Set loading to false when the video is loaded
  };
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <Landing onVideoLoad={handleVideoLoad} />
          <About />
          <ServicesText />
          <WhyChooseUs />
          {/* <Testimonial /> */}
          <TestimonialsNew />
          <BlogSection />
          <ServiceCards />
          <ClientsLogoStatic />
          <ContactFrom />
          <CallSection />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
};

export default Home;
