import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SonicPorosity = () => {
  return (
    <div className="master">
      <div className="header-1">Sonic Log Porosity</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Wyllie et al. (1958)
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Raymer et al. (1980)
          </Link>
        </button>
        <div className="next">Back</div>
        <button className="next-btn">
          <Link className="link" to="/porosity">
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

export default SonicPorosity;
