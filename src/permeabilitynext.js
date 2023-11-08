import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PermeabilityNext = () => {
  return (
    <div className="master">
      <div className="header-1">Permeability- Wyllie & Rose</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Medium Gravity Oil
          </Link>
        </button>
        <button className="option-btn">Dry gas</button>
        <div className="next">Back</div>
        <button className="next-btn">
          <Link className="link" to="/permeability">
            <AiOutlineArrowLeft />
          </Link>
        </button>
      </div>
      <footer className="footer-1">
        <button className="exit-btn">Exit</button>
      </footer>
    </div>
  );
};

export default PermeabilityNext;
