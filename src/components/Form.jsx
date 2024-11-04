import React from "react";
import TextInput from "./TextInput";
import RadioButton from "./RadioButton";
import CalculateButton from "./CalculateButton";
import "./Form.css";

const Form = ({
  onValuesChange,
  onCalculate,
  onTypeChange,
  onClear,
  errors,
  inputs,
}) => {
  return (
    <div className="form-container">
      <div className="mortAndButton">
        <h2>Mortgage Calculator</h2>
        <button className="clear-button" type="button" onClick={onClear}>
          Clear All
        </button>
      </div>
      <form className="form" action="">
        <TextInput
          onValuesChange={onValuesChange}
          inputs={inputs}
          errors={errors}
        />
        <RadioButton onTypeChange={onTypeChange} />
        <CalculateButton onCalculate={onCalculate} />
      </form>
    </div>
  );
};

export default Form;
