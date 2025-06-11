import React from "react";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/landing";
import ServicesText from "../components/home/ServicesText";
import ContactFrom from "../components/home/ContactFrom";
import Footer from "../components/home/Footer";
import About from "../components/home/AboutHome";
import CoworkingSpaceContent from "../components/home/CoworkingSpaceContent";
import BlogSection from "../components/blogs/BlogCard";
import TestimonialsNew from "../components/home/TestimonialsNew";
import FloatingContact from "../components/common/FloatingContact";
import TrainingHomeSection from "../components/home/TrainingHomeSection";
import ClientsCW from "../components/co-working/ClientsCW";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
      <>
        <Helmet>
          <title>Coworking & Office Spaces in Mahape, Navi Mumbai | NextGen Infratech</title>
          <meta name="description" content="Discover flexible coworking spaces, office rentals, meeting rooms & more at NextGen Infratech in Mahape, Navi Mumbai. Book your space today!" />
        </Helmet>
        <Navbar />
        <Landing />
        <About />
        <CoworkingSpaceContent />
        <TrainingHomeSection />
        <ServicesText />
        <TestimonialsNew />
        <BlogSection />
        <ClientsCW />
        <ContactFrom />
        <FloatingContact />
        <Footer />
      </>
  );
};

export default Home;
