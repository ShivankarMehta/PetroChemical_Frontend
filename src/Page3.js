import React from "react";
import { Link } from "react-router-dom";
const Page3 = () => {
  return (
    <div className="master">
      <div className="header-1">Calculations & Equations</div>
      <div className="body-3">
        <div>Choose one of the following options</div>
        <button className="option-btn">Equation</button>
        <button className="option-btn">
          <Link className="link" to="/page2">
            Calculate
          </Link>
        </button>
      </div>
      <footer className="footer-1">
        <button className="exit-btn">Home</button>
      </footer>
    </div>
  );
};

export default Page3;
