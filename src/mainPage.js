import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const MainPage = () => {
  return (
    <div className="master">
      <div className="header-1">Petrophysics Calculator</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">
          <Link className="link" to="/porosity">
            Porosity
          </Link>
        </button>
        <button className="option-btn">
          <Link className="link" to="/permeability">
            Permeability
          </Link>
        </button>
        <button className="option-btn">Water Saturation</button>
        <div className="next">Next</div>
        <button className="next-btn">
          <Link className="link" to="/nextpage">
            <AiOutlineArrowRight />
          </Link>
        </button>
      </div>
      <footer className="footer-1">
        <button className="exit-btn">Exit</button>
      </footer>
    </div>
  );
};

export default MainPage;
