import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import CTA from "../components/about/CTA";
import TrainingBanner from "../components/training/Traning";
import TrainingSection from "../components/training/TrainingSection";
import TrainingPrograms from "../components/training/TrainingPrograms";

const Training = () => {
  return (
    <div className="overflow-hidden min-h-screen flex flex-col">
      <>
        <Navbar />
        <main className="flex-grow">
          <TrainingBanner />
          <div className="container mx-auto px-4 py-6">
            <TrainingPrograms />
            <TrainingSection />
          </div>
        </main>
        <CTA />
        <Footer />
      </>
    </div>
  );
};

export default Training;
