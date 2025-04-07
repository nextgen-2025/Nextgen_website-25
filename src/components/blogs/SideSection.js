import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import CardCarousel from "./CardCarousel";

const SideSection = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    // Initialize the Contentful client with the Content Delivery API (CDA) token
    const client = createClient({
      space: "4s6a5ktc8bjo",
      accessToken: "XV-MGyrjD_2kKIq0s2z-iWhygRYxNtbT47fMsYsclQg",
    });

    // Fetch entries from Contentful
    client
      .getEntries({ content_type: "blog" }) // Replace with the correct content type ID
      .then((response) => {
        // console.log(response.items);
        setBlogData(response.items); // Set the fetched data to state
      })
      .catch((error) => {
        console.error("Error fetching data from Contentful:", error);
      });
  }, []);

  const truncateParagraph = (text, wordLimit = 20) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="lg:w-[25%] w-full px-2 lg:px-0 lg:my-20 side-section">
      <aside className="sticky">
        {/* About Section 1 */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-start text-[#696981] text-lg font-lato py-1 px-1.5 font-bold">
            About
          </h2>
          <div className="flex items-start">
            <div className="wp-block-avatar">
              <Link
                href="https://revision.codesupply.co/revision/author/codesupplyco/"
                target="_self"
                className="wp-block-avatar__link"
              >
                <img
                  alt="Ethan Caldwell Avatar"
                  src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp"
                  srcSet="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/10/Ethan-Caldwell.webp 2x"
                  className="rounded-full"
                  height="50"
                  width="50"
                />
              </Link>
            </div>
            <div className="text-start ml-2">
              <h3 className="">
                <Link
                  to="https://revision.codesupply.co/revision/author/codesupplyco/"
                  className="text-[#29294b] text-xl"
                >
                  Kanchan Gosavi
                </Link>
              </h3>
              <p className="text-[#696981] tracking-wider">
                Professional Blogger
              </p>
            </div>
          </div>
          <p className="text-[#696981] text-start text-sm px-2 py-2">
            Kanchan Gosavi shares thoughtful insights and reflections on life,
            culture, and personal growth. His work explores the intersections of
            creativity and experience, offering readers unique perspectives.
          </p>
          <h4 className="text-[#696981] text-start px-2">Mumbai, India</h4>
        </div>

        <div className="space-y-6">
          {blogData.slice(0, 3).map((blog, index) => {
            const { paragraphs, shortTitle, title } = blog.fields;
            const truncatedParagraph = truncateParagraph(paragraphs);

            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-start"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {shortTitle || title || "Office Space"}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {truncatedParagraph}
                </p>
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
            );
          })}
        </div>

        <CardCarousel />
      </aside>
    </div>
  );
};

export default SideSection;
