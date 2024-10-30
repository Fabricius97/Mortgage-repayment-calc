import React from "react";
import "./Results.css";

const Results = ({ result }) => {
  return (
    <div className="youreResultContainer">
      <div className="textContainer">
        <h3>Your results</h3>
        <span>
          Your results are shown below based on the information you provide. To
          adjust the results, edit the form and click "Calculate Repayments"
          again.
        </span>
      </div>
      <div className="resultContainer">
        <div className="monthly">
          <span>Your monthly repayments</span>
          <h1>{result !== null ? `${result} kr` : "0 kr"}</h1>{" "}
          {/* Visa resultatet */}
        </div>
        <div className="separator"></div>
        <div className="total">
          <span>Total you'll repay over the term</span>
          <h3>100.000 kr</h3>
        </div>
      </div>
    </div>
  );
};

export default Results;
