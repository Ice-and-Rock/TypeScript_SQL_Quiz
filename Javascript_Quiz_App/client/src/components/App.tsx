import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Arrays from "./LearnPages/Arrays_Quiz";
import Functions from "./LearnPages/Functions_Quiz";
import Variables from "./LearnPages/Variables_Quiz";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import TestPage from "./QuizPages/TestPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arrays" element={<Arrays />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/variables" element={<Variables />} />
            <Route path="/test-questions" element={<TestPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
