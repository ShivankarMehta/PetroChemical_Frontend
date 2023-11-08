import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Permeability = () => {
  return (
    <div className="master">
      <div className="header-1">Permeability</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">
          <Link className="link" to="/permeability/permeabilitynext">
            Wyllie & Rose (1950)
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            Timur (1968)
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            NMR Coates
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/page3">
            NMR
          </Link>
        </button>
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

export default Permeability;
