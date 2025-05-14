import Navbar from "../components/navbar/Navbar";
import TeamBanner from "../components/team/TeamBanner";
import TeamPicture from "../components/team/TeamPicture";
import Footer from "../components/home/Footer";
import CTA from "../components/about/CTA";
import TeamValues from "../components/team/TeamValues";

const Team = () => {
  return (
    <div>
      <>
        <Navbar />
        <TeamBanner />
        <TeamPicture />
        <TeamValues />
        <CTA />
        <Footer />
      </>
    </div>
  );
};

export default Team;
