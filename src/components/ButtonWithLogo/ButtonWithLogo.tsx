import React from "react";
import "./ButtonWithLogo.css";

function ButtonWithLogo({ icon, name }: any) {
  return (
    <div>
      <button className="icon-button">
        <div className="icon-image">
          <img src={icon}></img>
          <div className="icon-text"> {name}</div>
        </div>
      </button>
    </div>
  );
}

export default ButtonWithLogo;
