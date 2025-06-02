import React from "react";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/landing";
// import WhyChooseUs from "../components/home/WhyChooseUs";
// import ServiceCards from "../components/home/ServiceCards";
import ServicesText from "../components/home/ServicesText";
import ContactFrom from "../components/home/ContactFrom";
import Footer from "../components/home/Footer";
// import ClientLogo from "../components/home/ClientLogo";
// import Testimonial from "../components/home/Testimonials";
import About from "../components/home/AboutHome";
import CoworkingSpaceContent from "../components/home/CoworkingSpaceContent";
import ClientsLogoStatic from "../components/home/ClientsLogoStatic";
import BlogSection from "../components/blogs/BlogCard";
import TestimonialsNew from "../components/home/TestimonialsNew";
import FloatingContact from "../components/common/FloatingContact";
import TrainingHomeSection from "../components/home/TrainingHomeSection";

const Home = () => {
  return (
    <div>
      <>
        <Navbar />
        <Landing />
        <About />
        <CoworkingSpaceContent />
        <TrainingHomeSection />
        <ServicesText />
        {/* <WhyChooseUs /> */}
        {/* <Testimonial /> */}
        <TestimonialsNew />
        <BlogSection />
        {/* <ServiceCards /> */}
        <ClientsLogoStatic />
        <ContactFrom />
        <FloatingContact />
        <Footer />
      </>
    </div>
  );
};

export default Home;
