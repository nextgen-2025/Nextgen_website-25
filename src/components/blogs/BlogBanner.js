import React from "react";

const BlogBanner = () => {
  return (
    <div className="blog-banner py-24 flex justify-end items-end">
      <div className="text-white lg:mx-40 lg:my-10 mb-5 lg:mb-5">
        <h1 className="font-bold text-3xl lg:text-6xl mb-5 ">
          Collaborative <span className="text-teal-400 font-bold">Spaces</span>:
          Inspiring Ideas, Connections, and Growth
        </h1>
        <div className="font-thin lg:text-xl lg:mx-44 my-2">
          <p>
            Step into the ultimate hub for creativity and innovation! Explore
            curated content to inspire, connect, and empower professionals
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
