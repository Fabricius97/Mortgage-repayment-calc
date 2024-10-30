import React, { useState } from "react";
import "./RadioButton.css";

const RadioButton = () => {
  const [selectedType, setSelectedType] = useState(""); // Håller koll på vald radioknapp

  const radioOptions = [
    { id: "typeOne", name: "mortgageType", label: "Repayment" },
    { id: "typeTwo", name: "mortgageType", label: "Interest Only" },
  ];

  const handleChange = (id) => {
    setSelectedType(id); // Uppdatera vald typ
  };

  return (
    <div className="radio-group">
      <label className="group-label">Mortgage Type</label>
      {radioOptions.map((option) => (
        <label
          className={`radio-container ${
            selectedType === option.id ? "active" : ""
          }`} // Lägg till klass baserat på vald typ
          key={option.id}
        >
          <input
            type="radio"
            id={option.id}
            name={option.name}
            value={option.id}
            checked={selectedType === option.id} // Ställ in som vald om den är vald
            onChange={() => handleChange(option.id)} // Hantera förändring
          />
          <span className="radio-label">{option.label}</span>
        </label>
      ))}
      {/* <span className="error">This field is required</span> */}
    </div>
  );
};

export default RadioButton;
