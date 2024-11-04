import React, { useState } from "react";
import "./Calculator.css";
import Form from "./Form";
import Results from "./Results";

const Calculator = () => {
  const [inputs, setInputs] = useState({ amount: "", term: "", rate: "" }); // Initialized as an object
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [errors, setErrors] = useState({
    amount: false,
    term: false,
    rate: false,
  }); // Individual error states

  const handleInputChange = (updatedInputs) => {
    setInputs(updatedInputs);
  };

  const handleTypeChange = (type) => {
    setMortgageType(type);
  };

  const handleCalculate = () => {
    // Check for empty inputs
    const newErrors = {
      amount: !inputs.amount,
      term: !inputs.term,
      rate: !inputs.rate,
    };

    setErrors(newErrors); // Update the error states

    // If there are any errors, do not proceed
    if (newErrors.amount || newErrors.term || newErrors.rate) {
      return;
    }

    const principal = parseFloat(inputs.amount) || 0;
    const annualRate = parseFloat(inputs.rate) / 100 || 0;
    const months = parseInt(inputs.term) * 12 || 0;
    const monthlyRate = annualRate / 12;

    let monthlyPayment;
    let totalRepayment;

    if (mortgageType === "repayment") {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      totalRepayment = monthlyPayment * months;
    } else if (mortgageType === "interestOnly") {
      monthlyPayment = principal * monthlyRate;
      totalRepayment = monthlyPayment * months;
    }

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setTotalRepayment(totalRepayment.toFixed(2));
    setErrors({ amount: false, term: false, rate: false }); // Clear any existing errors
  };

  const handleClear = () => {
    setInputs({ amount: "", term: "", rate: "" });
    setMortgageType("repayment");
    setMonthlyPayment(null);
    setTotalRepayment(null);
    setErrors({ amount: false, term: false, rate: false }); // Clear any existing errors
  };

  return (
    <div className="calculator">
      <Form
        onValuesChange={handleInputChange}
        onCalculate={handleCalculate}
        onTypeChange={handleTypeChange}
        onClear={handleClear}
        errors={errors} // Pass error states to Form
        inputs={inputs} // Pass inputs to Form
      />
      <Results
        monthlyPayment={monthlyPayment}
        totalRepayment={totalRepayment}
      />
    </div>
  );
};

export default Calculator;
