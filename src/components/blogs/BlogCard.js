import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

const BlogCard = ({ images, category, shortDescription, title, blog }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-xl transition-all duration-300 hover:shadow-teal-500/20 hover:-translate-y-1">
      {/* Card Image with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={images ? images.fields.file.url : "/Banner-vedio-poster.png"}
          alt="Blog"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        
        {/* Category Badge */}
        <span
          className={`absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full text-white ${
            category === "Technology"
              ? "bg-gradient-to-r from-blue-500 to-blue-400"
              : "bg-gradient-to-r from-teal-500 to-teal-400"
          }`}
        >
          {category || "General"}
        </span>
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <h4 className="text-xl font-semibold text-white text-left leading-snug group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h4>

        <p className="text-sm text-left text-gray-300 leading-relaxed">
          {shortDescription}
        </p>

        <Link
          to={`/blog-details/${blog.sys.id}`}
          className="mt-auto text-teal-400 text-sm font-medium flex items-center group-hover:text-teal-300 transition-colors duration-300"
        >
          Continue Reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            className="ml-2 transition-transform group-hover:translate-x-2"
            viewBox="0 0 512 376.83"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

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
        setBlogData(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error);
        setError("Failed to load blogs. Please check your network.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-teal-400 font-semibold text-lg tracking-wide uppercase mb-2">
            Our Latest Insights
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold  text-white mb-4">
            Explore Our Blogs
          </h1>
          <p className="text-gray-300 text-lg">
            Dive into a world of knowledge, ideas, and useful resources that can help transform your business.
          </p>
        </div>

        {/* Loading and Error States */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-teal-400 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-xl text-red-400 bg-red-900/20 rounded-lg border border-red-800 px-4">
            {error}
          </div>
        ) : blogData.length === 0 ? (
          <div className="text-center py-16 text-xl bg-gray-800/50 rounded-lg border border-gray-700">
            No blogs found. Check back soon for new content!
          </div>
        ) : (
          /* Blog Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog, index) => {
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

        {/* Explore More Button */}
        {!loading && !error && blogData.length > 0 && (
          <div className="flex justify-center mt-12">
            <Link
              to="/blog"
              className="group bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
            >
              Explore All Articles
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
