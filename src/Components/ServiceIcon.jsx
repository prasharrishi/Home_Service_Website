import React from "react";
import Home from "../assets/Home.png";
import "./ServiceIcon.css";

function ServiceIcon({ imageURl, title, Caption }) {
  return (
    <div className="icon">
      {/* ------------Icon----------- */}
      <div className="iconImage">
        <img src={imageURl} alt="Home Icon" />
      </div>
      {/* ---------------Title-------------- */}
      <div className="iconTitle">{title}</div>
      {/* --------------Caption---------------------- */}
      <div className="iconCaption">{Caption}</div>
    </div>
  );
}

export default ServiceIcon;
