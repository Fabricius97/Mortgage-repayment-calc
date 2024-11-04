import React from "react";
import "./Results.css";
import illustration from "../assets/illustration-empty.svg";

const Results = ({ monthlyPayment, totalRepayment }) => {
  const isResultAvailable = monthlyPayment && totalRepayment;

  return (
    <div className="results-container">
      {isResultAvailable ? (
        <div className="youreResultContainer">
          <div className="textContainer">
            <h3>Your results</h3>
            <span>
              Your results are shown below based on the information you provide.
              To adjust the results, edit the form and click "Calculate
              Repayments" again.
            </span>
          </div>
          <div className="resultContainer">
            <div className="monthly">
              <span>Your monthly repayments</span>
              <h1>{`${monthlyPayment} kr`}</h1>
            </div>
            <div className="separator"></div>
            <div className="total">
              <span>Total you'll repay over the term</span>
              <h3>{`${totalRepayment} kr`}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="placeholder">
          <img src={illustration} alt="Calculator Placeholder" />
          <h3>Results shown here</h3>
          <p>
            Complete the form and click "Calculate Repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
