import React from "react";

// Styles
import "../css/loaders.css";

const DotsLoader = ({ className }) => {
  return (
    <span className={`${className} dots-wrapper`}>
      <span className="dot dot-0"></span>
      <span className="dot dot-1"></span>
      <span className="dot dot-2"></span>
    </span>
  );
};

export default DotsLoader;
