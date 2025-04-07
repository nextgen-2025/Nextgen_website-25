import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

// BlogCard Component to display individual blog details
const BlogCard = ({ images, category, shortDescription, title, blog }) => {
  return (
    <div className="flex flex-col lg:w-[90%] mx-auto overflow-hidden shadow-lg bg-gradient-to-r from-white to-[#28aa4b10]">
      {/* Card Header */}
      <div className="card__header">
        <img
          src={images ? images.fields.file.url : "/Banner-vedio-poster.png"}
          alt="Blog "
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="relative card__body p-4 flex flex-col gap-2 justify-between h-full">
        <div>
          {/* Category Tag */}
          <span
            className={`tag flex ${
              category === "Technology"
                ? "bg-gradient-to-b from-[#2F80ED] to-[#56CCF2]"
                : "bg-gradient-to-b from-[#28aa4a] to-[#28aa4b77]"
            } text-white text-xs py-1 px-3 rounded-full w-fit`}
          >
            {category || "office"}
          </span>

          {/* Title */}
          <h4 className="text-xl capitalize text-start py-2">{title}</h4>

          {/* Short Description */}
          <p className="text-gray-700 text-sm text-start">{shortDescription}</p>
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog-details/${blog.sys.id}`} // Use the blog's individual ID here
          title={`Discover More: ${title}`}
          className="mt-auto"
        >
          <span className="text-start text-[#28aa4a] font-thin flex items-center group hover:ml-1">
            Continue Reading
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="pl-2 group-hover:ml-1"
              viewBox="0 0 512 376.83"
            >
              <path
                fillRule="evenodd"
                fill="#28aa4a"
                d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

// BlogSection Component to fetch and display the list of blogs
const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: "4s6a5ktc8bjo",
      accessToken: "XV-MGyrjD_2kKIq0s2z-iWhygRYxNtbT47fMsYsclQg",
    });

    client
      .getEntries({ content_type: "blog" })
      .then((response) => {
        // Process the response to format data
        setBlogData(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error);
        setError("Failed to load blogs. Please check you Network.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:px-20 md:my-7">
      <div className="my-5">
        <h1 className="text-[#28aa4a] font-bold text-4xl lg:text-5xl py-2 font-lato">
          Explore Our Blog
        </h1>
        <h3 className="text-[#28aa4a] font-thin text-3xl">
          Dive into a world of knowledge, ideas, and useful resources.
        </h3>
      </div>

      {/* Display loading, error, or no content message */}
      {loading ? (
        <div className="text-center py-10 text-xl font-lato font-thin">
          Loading...
        </div>
      ) : error ? (
        <div className="text-center py-10 text-xl text-red-500 font-lato font-thin">
          {error}
        </div>
      ) : blogData.length === 0 ? (
        <div className="text-center py-10 text-xl">No blogs found</div>
      ) : (
        // Grid to display each blog card
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {blogData.map((blog, index) => {
            // Extracting the required data for each blog
            const { title, category, images, paragraphs } = blog.fields;
            const shortDescription = paragraphs
              ? paragraphs.split(" ").slice(0, 20).join(" ") + "..."
              : "";

            return (
              <BlogCard
                key={index}
                title={title}
                category={category}
                images={images}
                shortDescription={shortDescription}
                blog={blog}
              />
            );
          })}
        </div>
      )}

      {/* Read More Link */}
      <div>
        <Link
          to="/blog"
          className="rounded-lg bg-gradient-to-b from-[#28aa4a] to-[#28aa4baf] px-6 py-1.5 text-white font-thin flex items-center w-fit mx-auto hover:bg-[#28aa4a] group mb-10 lg:mb-0"
        >
          Explore more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            className="pl-2 group-hover:ml-1"
            viewBox="0 0 512 376.83"
          >
            <path
              fillRule="evenodd"
              fill="#fff"
              d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
