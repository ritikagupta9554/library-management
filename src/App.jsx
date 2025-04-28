import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EnquiryPage from "./pages/EnquiryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" element={  <LandingPage />} />
        <Route path="/enquiry" element={
          <EnquiryPage />} />
        {/* <Footer/> */}
      </Routes>
    </Router>
  );
}

export default App;
