import { Helmet } from "react-helmet-async";
import BlogBanner from "../components/blogs/BlogBanner";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import BlogPageCards from "../components/blogs/BlogPageCards";
import SideSection from "../components/blogs/SideSection";

const BlogPage = () => {

  return (
    <div>
      <>
        <Helmet>
          <title>NextGen Infratech Blog | Insights & Updates</title>
          <meta name="description" content="Read the latest insights, updates, and tips from NextGen Infratech on coworking, real estate, digital marketing, and more in Navi Mumbai." />
        </Helmet>
        <Navbar />
        <BlogBanner />
        <div className="flex flex-col lg:flex-row w-full items-start justify-center">
          <BlogPageCards />
          <SideSection />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default BlogPage;
