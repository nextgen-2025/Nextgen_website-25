import React from "react";
import BlogBanner from "../components/blogs/BlogBanner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import BlogPageCards from "../components/blogs/BlogPageCards";
import SideSection from "../components/blogs/SideSection";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <BlogBanner />
      <div className="flex flex-col lg:flex-row w-full items-start justify-center">
        <BlogPageCards />
        <SideSection />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
