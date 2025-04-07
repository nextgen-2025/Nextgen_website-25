import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import Navbar from "../navbar/Navbar";
import Footer from "../home/Footer";
import SideSection from "./SideSection";
import Loader from "../loader/Loader";

const BlogPageDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Initialize the Contentful client
    const client = createClient({
      space: "4s6a5ktc8bjo",
      accessToken: "XV-MGyrjD_2kKIq0s2z-iWhygRYxNtbT47fMsYsclQg",
    });

    // Fetch the specific blog entry by ID
    client
      .getEntry(id) // Fetch by the specific blog ID
      .then((response) => {
        setBlog(response); // Set the fetched blog data to state
        // console.log();
      })
      .catch((error) => {
        console.error("Error fetching the blog:", error);
      });
  }, [id]); // The hook will re-run whenever the `id` changes

  if (!blog) {
    return (
      <div>
        <Loader />
      </div>
    ); // Show loading text while fetching data
  }

  // Destructure fields from the fetched blog data

  const {
    shortTitle,
    title,
    paragraphs,
    images,
    subHeadingMainBody,
    mainBody,
    conclusion,
    solutionBenefits,
  } = blog.fields;
  const { createdAt } = blog.sys;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Options to format the date to "November 25, 2024"
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const renderRichText = (richText) => {
    // Ensure the richText and richText.content exist
    if (!richText || !richText.content) {
      return null; // Return null or an empty div if the content doesn't exist
    }

    return richText.content.map((paragraph, index) => {
      const paragraphText = paragraph.content
        .map((textNode) => textNode.value)
        .join("");

      return (
        <p key={index} className="text-justify text-lg">
          {paragraphText}
        </p>
      );
    });
  };

  const renderOrderedList = (richText) => {
    if (!richText || !richText.content) {
      return null;
    }

    return richText.content.map((item, index) => {
      if (item.nodeType === "ordered-list") {
        return (
          <ol key={index} className="list-decimal pl-6">
            {item.content.map((listItem, index) => {
              if (listItem.nodeType === "list-item") {
                const listItemText = listItem.content
                  .map((paragraph) => {
                    return paragraph.content
                      .map((textNode) => textNode.value)
                      .join("");
                  })
                  .join("");
                return (
                  <li key={index} className="mb-2">
                    {listItemText}
                  </li>
                );
              }
              return null;
            })}
          </ol>
        );
      }

      // Handle paragraph type content
      if (item.nodeType === "paragraph") {
        return (
          <p key={index} className="mb-4">
            {item.content.map((textNode, idx) => textNode.value).join("")}
          </p>
        );
      }

      return null;
    });
  };

  const renderUnorderedList = (richText) => {
    if (!richText || !richText.content) {
      return null;
    }

    return richText.content.map((item, index) => {
      if (item.nodeType === "unordered-list") {
        return (
          <ul key={index} className="list-disc pl-6">
            {item.content.map((listItem, index) => {
              if (listItem.nodeType === "list-item") {
                const listItemText = listItem.content
                  .map((paragraph) => {
                    return paragraph.content
                      .map((textNode) => textNode.value)
                      .join("");
                  })
                  .join(" ");

                return (
                  <li key={index} className="mb-2">
                    {listItemText}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        );
      } else if (item.nodeType === "paragraph") {
        const paragraphText = item.content
          .map((textNode) => textNode.value)
          .join("");

        return (
          <p key={index} className="mb-4">
            {paragraphText}
          </p>
        );
      }

      return null;
    });
  };

  return (
    <div>
      <Navbar />

      <div>
        {blog ? (
          <div>
            <div className="blog-banner h-80 flex justify-end items-end lg:justify-center lg:items-center ">
              <div className="text-white lg:mx-40 lg:my-10 mb-10 lg:mb-0">
                <h1 className="font-bold font-Manrope text-4xl lg:text-6xl ">
                  {shortTitle || title || "The Rise of Co-Working Spaces"}
                </h1>
                <h3 className="font-bold font-Manrope  text-xl py-4">
                  Collaborative <span className="text-[#28aa4a]">Spaces</span>:
                  Inspiring Ideas, Connections, and Growth
                </h3>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full items-start justify-center">
              <div className="lg:my-20 lg:mr-20 mr-2 w-full lg:w-[60%] text-start">
                <h1 className="text-3xl lg:text-5xl lg:tracking-wide font-Manrope">
                  {title ||
                    "The Rise of Co-Working Spaces: A New Era for Workplaces"}
                </h1>
                <div className="flex items-center gap-1 justify-start py-1">
                  <h1 className="font-Manrope">- Kanchan Gosavi</h1>
                  <p className="text-xs font-Manrope pt-1">
                    on {formatDate(createdAt)}
                  </p>
                </div>
                <div>
                  <img
                    src={
                      images
                        ? images.fields.file.url
                        : "/Banner-vedio-poster.png"
                    }
                    alt="banner"
                  />
                  <p className="py-3 font-thin text-justify mx-2 lg:mx-0 text-black font-Manrope tracking-wider">
                    {paragraphs}
                  </p>
                </div>

                <div className="mx-2 lg:mx-0">
                  <h1 className="font-semibold font-Manrope tracking-wider">
                    {subHeadingMainBody}
                  </h1>
                  <span className="font-thin font-Manrope py-2">
                    {renderRichText(mainBody)}
                  </span>

                  {/* Render Solutions if present */}
                  {solutionBenefits && solutionBenefits.content?.length > 0 && (
                    <div>
                      <h1 className="text-3xl font-Manrope font-semibold pt-7">
                        Solutions
                      </h1>
                      <div className="blog-content mt-2 font-Manrope font-thin">
                        {renderUnorderedList(solutionBenefits)}
                      </div>
                    </div>
                  )}

                  {/* Render Conclusion if present */}
                  {conclusion && conclusion.content?.length > 0 && (
                    <div>
                      <h1 className="text-3xl font-Manrope font-semibold pt-7">
                        Conclusion
                      </h1>
                      <div className="blog-content mt-6 font-Manrope font-thin">
                        {renderOrderedList(conclusion)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="border w-[70%] mx-auto mt-10 mb-5"></div>
                <div className="mt-5 ">
                  <ul className="social-media-list">
                    <a
                      href="https://www.facebook.com/profile.php?id=100086358938007"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://youtu.be/Ur8BC49cEDc?si=QHApFFM1GkD4fsKa"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/80077007/admin/notifications/all/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </li>
                    </a>
                    <a
                      href="https://www.instagram.com/nextgen.infratech/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                    >
                      <li>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
              <SideSection />
            </div>

            {/* <div className="flex flex-col items-center justify-start">
              <Link
                to="/contact"
                className="text-xl bg-green-600 font-thin text-white px-3 py-1.5 rounded-md w-fit"
              >
                Contact Us{" "}
              </Link>
            </div> */}
          </div>
        ) : (
          <div className="blog-content">
            <p>Loading blog details...</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPageDetails;
