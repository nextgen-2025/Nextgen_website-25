
import Navbar from "../components/navbar/Navbar";
import "../components/customcss/gallery.css";
import GalleryImages from "../components/gallery/GalleryImages";
import Footer from "../components/home/Footer";
import GalleryBanner from "../components/gallery/GalleryBanner";

const Gallery = () => {
  return (
    <>
        <>
          <Navbar />
          <GalleryBanner />
          <GalleryImages />
          <Footer />
        </>
    </>
  );
};

export default Gallery;
