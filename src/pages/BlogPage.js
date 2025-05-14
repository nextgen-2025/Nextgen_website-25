import React from "react";
import BlogBanner from "../components/blogs/BlogBanner";
import Navbar from "../components/navbar/Navbar";
import { useState, useEffect } from "react";
import Loader from "../components/loader/Loader";
import Footer from "../components/home/Footer";
import BlogPageCards from "../components/blogs/BlogPageCards";
import SideSection from "../components/blogs/SideSection";

const BlogPage = () => {
  
const [isLoading, setIsLoading] = useState(true);

useEffect(() =>{
  const timer= setTimeout(()=>{
    setIsLoading(false);
  },2000);
  return ()=> clearTimeout(timer);
},[]);


  return (
    <div>
      {isLoading && <Loader/>}
      {!isLoading &&(
        <>
          <Navbar />
          <BlogBanner />
          <div className="flex flex-col lg:flex-row w-full items-start justify-center">
            <BlogPageCards />
            <SideSection />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogPage;
