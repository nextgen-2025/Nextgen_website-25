import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import TrainingBanner from "../components/training/Traning";
import TrainingSection from "../components/training/TrainingSection";
import TrainingPrograms from "../components/training/TrainingPrograms";

const Training = () => {
  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-gray-800">
      <>
        <Navbar />
          <TrainingBanner />
          <div className="container mx-auto px-4 py-6 bg-gradient-to-r from-gray-900 to-gray-800">
            <TrainingPrograms />
            <TrainingSection />
          </div>
        <Footer />
      </>
    </div>
  );
};

export default Training;
