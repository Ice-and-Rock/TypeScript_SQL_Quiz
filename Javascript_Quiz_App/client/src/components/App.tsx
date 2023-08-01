import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Arrays from "./quizes/Arrays_Quiz";
import Functions from "./quizes/Functions_Quiz";
import Variables from "./quizes/Variables_Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";



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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
