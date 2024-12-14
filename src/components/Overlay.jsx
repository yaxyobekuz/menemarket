import React from "react";

const Overlay = ({ onClick = () => {}, className = "z-0" }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute inset-x-0 size-full bg-black/20  backdrop-blur ${className}`}
    />
  );
};

export default Overlay;
