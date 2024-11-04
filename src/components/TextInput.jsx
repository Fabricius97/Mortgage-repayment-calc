import React, { useState } from "react";
import "./TextInput.css";

const TextInput = ({ onValuesChange, inputs, errors }) => {
  const [activeInput, setActiveInput] = useState(null);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const normalizedValue = value.replace(",", ".");
    const updatedValue =
      normalizedValue === "" ? "" : parseFloat(normalizedValue);

    if (!isNaN(updatedValue) || normalizedValue === "") {
      onValuesChange({ ...inputs, [id]: normalizedValue });
    }
  };

  const handleFocus = (id) => setActiveInput(id);
  const handleBlur = () => setActiveInput(null);

  const textInputs = [
    { label: "Mortgage Amount", id: "amount", unit: "kr" },
    { label: "Mortgage Term", id: "term", unit: "years" },
    { label: "Mortgage Rate", id: "rate", unit: "%" },
  ];

  return (
    <>
      {/* Mortgage Amount on its own line */}
      <div className="text-input">
        <label htmlFor="amount">Mortgage Amount</label>
        <div
          className={`input-container ${
            errors.amount && activeInput !== "amount" ? "error" : ""
          } ${activeInput === "amount" ? "active" : ""}`}
        >
          <input
            type="text"
            id="amount"
            value={inputs.amount || ""}
            onChange={handleChange}
            onFocus={() => handleFocus("amount")}
            onBlur={handleBlur}
          />
          <span
            className={`input-label ${
              errors.amount && activeInput !== "amount" ? "error" : ""
            }`}
          >
            kr
          </span>
        </div>
        {errors.amount && <span className="error">This field is required</span>}
      </div>

      {/* Term and Rate in a row on larger screens */}
      <div className="text-input-container">
        {textInputs.slice(1).map((input) => (
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
                value={inputs[input.id] || ""}
                onChange={handleChange}
                onFocus={() => handleFocus(input.id)}
                onBlur={handleBlur}
              />
              <span
                className={`input-label ${
                  errors[input.id] && activeInput !== input.id ? "error" : ""
                }`}
              >
                {input.unit}
              </span>
            </div>
            {errors[input.id] && (
              <span className="error">This field is required</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TextInput;
