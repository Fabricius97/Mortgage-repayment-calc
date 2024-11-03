import React, { useState } from "react";
import "./TextInput.css";

const TextInput = ({ onValuesChange, inputs, errors }) => {
  const [activeInput, setActiveInput] = useState(null); // Track which input is active

  const handleChange = (event) => {
    const { id, value } = event.target;

    // Normalize the value: replace comma with a dot for conversion
    const normalizedValue = value.replace(",", ".");

    // Validate and parse the value
    const updatedValue =
      normalizedValue === "" ? "" : parseFloat(normalizedValue);

    // Use valid value if it's a number, otherwise send an empty string
    if (!isNaN(updatedValue) || normalizedValue === "") {
      onValuesChange({ ...inputs, [id]: normalizedValue }); // Send the normalized string to the parent
    }
  };

  const handleFocus = (id) => {
    setActiveInput(id); // Set the active input id
  };

  const handleBlur = () => {
    setActiveInput(null); // Clear the active input when focus is lost
  };

  const textInputs = [
    { label: "Mortgage Amount", id: "amount", unit: "kr" },
    { label: "Mortgage Term", id: "term", unit: "years" },
    { label: "Mortgage Rate", id: "rate", unit: "%" },
  ];

  return (
    <>
      {textInputs.map((input) => (
        <div className="text-input" key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <div
            className={`input-container ${
              errors[input.id] && activeInput !== input.id ? "error" : ""
            } ${activeInput === input.id ? "active" : ""}`}
          >
            <input
              type="text"
              id={input.id}
              value={inputs[input.id] || ""} // Use an empty string if undefined
              onChange={handleChange}
              onFocus={() => handleFocus(input.id)} // Set active input on focus
              onBlur={handleBlur} // Clear active input on blur
            />
            {input.unit && (
              <span
                className={`input-label ${
                  errors[input.id] && activeInput !== input.id ? "error" : ""
                } ${activeInput === input.id ? "active" : ""}`}
              >
                {input.unit}
              </span>
            )}
          </div>
          {/* Show error message if the field is empty */}
          {errors[input.id] && (
            <span className="error">This field is required</span>
          )}
        </div>
      ))}
    </>
  );
};

export default TextInput;
