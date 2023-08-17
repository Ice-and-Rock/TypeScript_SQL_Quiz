import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Arrays from "./LearnPages/Arrays_Quiz";
import Functions from "./LearnPages/Functions_Quiz";
import Variables from "./LearnPages/Variables_Quiz";
import NotFound from "./NotFound";
import QuizPage from "./QuizPages/QuizPage"
import ContactPage from "./ContactPage";
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-gradient-to-b from-gray-200 to-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arrays" element={<Arrays />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/variables" element={<Variables />} />
            <Route path="/quiz-questions" element={<QuizPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
