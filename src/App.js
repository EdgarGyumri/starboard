import React from "react";
import Homepage from './cite-parts/homepage.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/features" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
