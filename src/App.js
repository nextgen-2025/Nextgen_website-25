import "./App.css";
import WorkInProgress from "./components/WorkInProgress";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Leaderships from "./pages/Leaderships";
import ITServices from "./pages/ITServices";
import CoWorkingSpace from "./pages/CoWorkingSpace";
import ITServicesCardDetails from "./components/itservices/ITServicesCardDetails";
import DigitalMarketing from "./pages/DigitalMarketing";
import DMServicesDetails from "./components/digital-marketing/DMServicesDetails";
import RealEstate from "./pages/RealEstate";
import "./components/customcss/fonts.css";
import { Careers } from "./pages/Careers";
import Gallery from "./pages/Gallery";
import BlogPage from "./pages/BlogPage";
import BlogPageDetails from "./components/blogs/BlogPageDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/teams" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/leaderships" element={<Leaderships />}></Route>
          <Route path="/it-services" element={<ITServices />}></Route>
          <Route
            path="/it-services/:id"
            element={<ITServicesCardDetails />}
          ></Route>
          <Route path="/coworking" element={<CoWorkingSpace />}></Route>
          <Route
            path="/digtal-marketing"
            element={<DigitalMarketing />}
          ></Route>
          <Route path="/real-estate" element={<RealEstate />}></Route>
          <Route
            path="/digtal-marketing/:id"
            element={<DMServicesDetails />}
          ></Route>
          <Route path="/work-in-progress" element={<WorkInProgress />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/blog-details/:id" element={<BlogPageDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
