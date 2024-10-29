import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <button className="clear-button">Clear All</button>
      <form className="form" action="">
        <label htmlFor="amount">Mortgage Amount</label>
        <div className="input-container">
          <input
            className="amount"
            type="text"
            name="Mortgage Amount"
            id="amount"
          />
          <span className="input-label">kr</span>
        </div>

        <label htmlFor="term">Mortgage Term</label>
        <div className="input-container">
          <input className="term" type="text" id="term" />
          <span className="input-label">years</span>
        </div>

        <label htmlFor="rate">Mortgage Rate</label>
        <div className="input-container">
          <input className="rate" type="text" id="rate" />
          <span className="input-label">%</span>
        </div>

        <label htmlFor="type">Mortgage Type</label>
        <div className="radio-container">
          <input
            className="type"
            type="radio"
            id="typeOne"
            name="mortgageType"
          />
          <label htmlFor="typeOne">Repayment</label>
        </div>
        <div className="radio-container">
          <input
            className="type"
            type="radio"
            id="typeTwo"
            name="mortgageType"
          />
          <label htmlFor="typeTwo">Interest Only</label>
        </div>
      </form>
    </div>
  );
};

export default Form;
