import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/home/Footer";
import CWHome from "../components/co-working/CWHome";
import SpaceCards from "../components/co-working/SpaceCards";
import Process from "../components/co-working/Process";
import WhyChooseUsWorking from "../components/co-working/WhyChooseUsWorking";
import TestimonialsCW from "../components/co-working/TestimonialsCW";
import FAQS from "../components/co-working/FAQS";
import ClientsCW from "../components/co-working/ClientsCW";
import HotProperties from "../components/co-working/HotProperties";
import { Helmet } from "react-helmet-async";

const CoWorkingSpace = () => {
  return (
    <div>
        <>
          <Helmet>
            <title>Flexible Co-working Space in Navi Mumbai | NextGen Infratech</title>
            <meta name="description" content="Find modern, affordable co-working spaces with high-speed Wi-Fi, private cabins, meeting rooms & more in Mahape, Navi Mumbai. Book a free tour now!" />
          </Helmet>
          <Navbar />
          <CWHome />
          <HotProperties />
          <SpaceCards />
          <Process />
          <WhyChooseUsWorking />
          <TestimonialsCW />
          <FAQS />
          <ClientsCW />
          <Footer />
        </>
    {" "}
    </div>
  );
};

export default CoWorkingSpace;
