// src/App.tsx
import React from "react";
import "./gallery.css";
import Gallery from "../../components/images";
import OverlappingSquares from "../../components/OverlappingSquares/OverlappingSquares";

const App: React.FC = () => {
  return (
    <div className="content">
      <h6 className="title"><OverlappingSquares/>Our Projects</h6>
      <h2 className="Sub_heading">Recently Launched Projects</h2>
      <Gallery/>
    </div>
  );
};

export default App;
