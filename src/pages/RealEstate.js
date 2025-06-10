import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import REBanner from "../components/real-estate/REBanner";
import REAbout from "../components/real-estate/REAbout";
import { REHistory } from "../components/real-estate/REHistory";
import REServices from "../components/real-estate/REServices";
import REProjects from "../components/real-estate/REProjects";
import ContactFrom from "../components/home/ContactFrom";

const RealEstate = () => {
 
  // const handleVideoLoad = () => {
  //   setIsLoading(false);
  // };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        <>
          <Navbar />
          <REBanner />
          <REHistory />
          <REAbout />
          <REServices />
          <REProjects />
          <ContactFrom />
          <Footer />
        </>
    </div>
  );
};

export default RealEstate;
