import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Porosity = () => {
  return (
    <div className="master">
      <div className="header-1">Porosity</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">
          <Link className="link" to="/porosity/soniclogporosity">
            Sonic Log Porosity
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Density Log Porosity
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Resistivity Log Porosity
          </Link>
        </button>
        <button className="option-btn">Shale Corrected</button>
        <div className="next">Back</div>
        <button className="next-btn">
          <Link className="link" to="/">
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

export default Porosity;
