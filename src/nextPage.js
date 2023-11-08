import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const NextPage = () => {
  return (
    <div className="master">
      <div className="header-1">Petrophysics Calculator</div>
      <div className="body-1">
        <div>Choose one of the following options</div>
        <button className="option-btn">Reserves</button>
        <button className="option-btn">References</button>
        <button className="option-btn">App Info</button>
        <button className="option-btn">Contact Info</button>
        <button className="option-btn">Provacy Policy</button>
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

export default NextPage;
