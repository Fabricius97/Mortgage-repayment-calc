import React, { useState } from "react";
import "./Calculator.css";
import Form from "./Form";
import Results from "./Results";

const Calculator = () => {
  const [inputs, setInputs] = useState({ amount: "", term: "", rate: "" });
  const [result, setResult] = useState(null);

  // Uppdatera inmatningsvärden från Form
  const handleInputChange = (updatedInputs) => {
    setInputs(updatedInputs);
  };

  // Utför beräkningen och uppdatera resultatet
  const handleCalculate = () => {
    const total =
      (parseFloat(inputs.amount) || 0) +
      (parseFloat(inputs.term) || 0) +
      (parseFloat(inputs.rate) || 0);
    setResult(total);
  };

  return (
    <div className="calculator">
      <h2>Mortgage Calculator</h2>
      <Form onValuesChange={handleInputChange} onCalculate={handleCalculate} />
      <Results result={result} />
    </div>
  );
};

export default Calculator;
