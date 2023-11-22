import React from "react";
import "./style.css";

const Uzum = (props) => {
  return (
    <div className="grap_container">
      <div className="grap-wrapper">
        <img src={props.image} alt="" className="grap_img" />
        <h2 className="grap-title">{props.title}</h2>
        <p className="grap-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Uzum;
