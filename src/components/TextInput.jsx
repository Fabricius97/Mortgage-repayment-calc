import React, { useState } from "react";
import "./TextInput.css";

const TextInput = ({ onValuesChange }) => {
  const [inputs, setInputs] = useState({ amount: "", term: "", rate: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedValue = value === "" ? "" : parseFloat(value);

    const newInputs = { ...inputs, [id]: updatedValue };
    setInputs(newInputs);
    onValuesChange(newInputs);
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
          <div className="input-container">
            <input
              type="text"
              id={input.id}
              value={inputs[input.id]}
              onChange={handleChange}
            />
            {input.unit && <span className="input-label">{input.unit}</span>}
          </div>
        </div>
      ))}
    </>
  );
};

export default TextInput;
