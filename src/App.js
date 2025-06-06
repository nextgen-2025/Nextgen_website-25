import "./App.css";
import WorkInProgress from "./components/WorkInProgress";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ITServices from "./pages/ITServices";
import CoWorkingSpace from "./pages/CoWorkingSpace";
import DigitalMarketing from "./pages/DigitalMarketing";
import RealEstate from "./pages/RealEstate";
import "./components/customcss/fonts.css";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";
import BlogPage from "./pages/BlogPage";
import BlogPageDetails from "./components/blogs/BlogPageDetails";
import Traning from "./pages/Traning";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/common/FloatingContact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/teams" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/it-services" element={<ITServices />}></Route>

          <Route path="/coworking" element={<CoWorkingSpace />}></Route>
          <Route
            path="/digtal-marketing"
            element={<DigitalMarketing />}
          ></Route>
          <Route path="/real-estate" element={<RealEstate />}></Route>
          <Route path="/work-in-progress" element={<WorkInProgress />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/blog-details/:id" element={<BlogPageDetails />}></Route>
          <Route path="/training" element={<Traning />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="/cookie-policy" element={<CookiePolicy />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <FloatingContact />
      </Router>
    </div>
  );
}

export default App;
