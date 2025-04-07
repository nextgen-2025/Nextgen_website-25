import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/customcss/gallery.css";
import GalleryImages from "../components/gallery/GalleryImages";
import Footer from "../components/home/Footer";
import Loader from "../components/loader/Loader";
import GalleryBanner from "../components/gallery/GalleryBanner";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <GalleryBanner />
          <GalleryImages />
          <Footer />
        </>
      )}
    </>
  );
};

export default Gallery;
