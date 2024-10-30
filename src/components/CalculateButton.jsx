import React from "react";
import "./CalculateButton.css";
import calcImage from "../assets/icon-calculator.svg";

const CalculateButton = ({ onCalculate }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Förhindra formens standardbeteende
    onCalculate(); // Anropa beräkningsfunktionen
  };

  return (
    <div>
      <button className="calculateButton" onClick={handleClick}>
        <img src={calcImage} alt="calcImage" />
        Calculate Repayments
      </button>
    </div>
  );
};

export default CalculateButton;
