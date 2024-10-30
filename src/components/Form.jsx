import React from "react";
import TextInput from "./TextInput";
import RadioButton from "./RadioButton";
import CalculateButton from "./CalculateButton";
import "./Form.css";

const Form = ({ onValuesChange, onCalculate }) => {
  return (
    <div className="form-container">
      <button className="clear-button">Clear All</button>
      <form className="form" action="">
        <TextInput onValuesChange={onValuesChange} />
        <RadioButton />
        <CalculateButton onCalculate={onCalculate} />
      </form>
    </div>
  );
};

export default Form;
