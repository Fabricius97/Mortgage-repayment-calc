import React, { useState } from "react";
import "./RadioButton.css";

const RadioButton = ({ onTypeChange }) => {
  const [selectedType, setSelectedType] = useState("");

  const radioOptions = [
    { id: "repayment", name: "mortgageType", label: "Repayment" },
    { id: "interestOnly", name: "mortgageType", label: "Interest Only" },
  ];

  const handleChange = (id) => {
    setSelectedType(id);
    onTypeChange(id); // Skicka vald typ till parent-komponenten
  };

  return (
    <div className="radio-group">
      <label className="group-label">Mortgage Type</label>
      {radioOptions.map((option) => (
        <label
          className={`radio-container ${
            selectedType === option.id ? "active" : ""
          }`}
          key={option.id}
        >
          <input
            type="radio"
            id={option.id}
            name={option.name}
            value={option.id}
            checked={selectedType === option.id}
            onChange={() => handleChange(option.id)}
          />
          <span className="radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
