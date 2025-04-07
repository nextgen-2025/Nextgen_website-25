import React from "react";

const BlogBanner = () => {
  return (
    <div className="blog-banner h-80 flex justify-end items-end">
      <div className="text-white lg:mx-40 lg:my-10 mb-5 lg:mb-5">
        <h1 className="font-bold font-Manrope text-3xl lg:text-6xl ">
          Collaborative <span className="text-[#28aa4a]">Spaces</span>:
          Inspiring Ideas, Connections, and Growth
        </h1>
        <div className="font-thin font-Manrope lg:text-xl lg:mx-44 my-2">
          Step into the ultimate hub for creativity and innovation! Explore
          curated content to inspire, connect, and empower professionals
          worldwide.
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
