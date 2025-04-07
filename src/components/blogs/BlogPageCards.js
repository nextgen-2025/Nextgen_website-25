import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";

const BlogPageCards = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    // Initialize the Contentful client with the Content Delivery API (CDA) token
    const client = createClient({
      space: "4s6a5ktc8bjo",
      accessToken: "XV-MGyrjD_2kKIq0s2z-iWhygRYxNtbT47fMsYsclQg",
    });

    // Fetch entries from Contentful
    client
      .getEntries({ content_type: "blog" })
      .then((response) => {
        // console.log(response.items);
        setBlogData(response.items);
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, []);

  return (
    <div className="lg:my-20 mt-5 lg:mt-20 lg:w-[70%] lg:mx-0 mx-2">
      {blogData ? (
        <div>
          {blogData.length === 0 ? (
            <div>No blogs available</div>
          ) : (
            blogData.map((blog, index) => {
              // Assuming the fetched blog data has properties similar to static blogs
              const { category, title, paragraphs, images, shortTitle } =
                blog.fields;
              const { createdAt } = blog.sys;

              const formatDate = (dateString) => {
                const date = new Date(dateString);
                // Options to format the date to "November 25, 2024"
                const options = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                };
                return date.toLocaleDateString("en-US", options);
              };

              // Shorten the description to 20 words
              const shortDescription = paragraphs
                ? paragraphs.split(" ").slice(0, 20).join(" ") + "..."
                : "";

              return (
                <div key={index} className="mb-10">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative">
                      <img
                        src={
                          images
                            ? images.fields.file.url
                            : "/Banner-vedio-poster.png"
                        } // Use fallback if no image
                        alt={title}
                        width={450}
                        className="h-60 object-cover rounded-lg"
                      />
                      <h3 className="absolute top-2 left-2 text-black rounded-xl px-3 shadow-lg font-semibold bg-white">
                        {category || "co-working"}
                      </h3>
                    </div>
                    <div className="flex flex-col space-x-4 gap-2 items-start lg:w-[40%]">
                      <div className="text-[#696981] pl-4">
                        {formatDate(createdAt)}
                      </div>
                      <h2 className="text-[#29294b] text-2xl text-start font-semibold">
                        <span>{shortTitle || title}</span>
                      </h2>
                      <div className="text-start text-[#696981] flex-1">
                        {shortDescription}
                      </div>
                      <div className="">
                        <Link
                          className="inline-flex p-1.5 items-center justify-center text-white bg-button  px-4 rounded-md leading-tight tracking-normal  font-thin cursor-pointer shadow-none overflow-hidden relative z-10 bg-[#28aa4a]"
                          to={`/blog-details/${blog.sys.id}`}
                          title={`Discover More: ${title}`}
                        >
                          Read More{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            imageRendering="optimizeQuality"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            viewBox="0 0 512 376.83"
                            width={20}
                            className="pl-2 group-hover:ml-1"
                          >
                            <path
                              fillRule="nonzero"
                              fill="#fff"
                              d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1  gap-10">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div className="mb-10" key={index}>
                  <div className="flex">
                    {/* Image Skeleton */}
                    <div className="relative w-1/2">
                      <div className="bg-gray-300 h-60 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Text Skeleton */}
                    <div className="flex flex-col space-x-4 gap-2 items-start w-[40%]">
                      {/* Date Skeleton */}
                      <div className="bg-gray-300 h-4 w-32 rounded-full animate-pulse pl-4"></div>

                      {/* Title Skeleton */}
                      <div className="bg-gray-300 h-6 w-full rounded-lg animate-pulse"></div>

                      {/* Short Description Skeleton */}
                      <div className="bg-gray-300 h-4 w-full rounded-lg animate-pulse"></div>

                      {/* Button Skeleton */}
                      <div className="bg-gray-300 h-10 w-48 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPageCards;
