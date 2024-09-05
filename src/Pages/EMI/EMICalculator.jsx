import React, { useState } from 'react';
import './EMICalculator.css';

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const tenure = parseInt(loanTenure) * 12;

    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - principal;

    setEmi(emi.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setTotalPayment(totalPayment.toFixed(2));
  };

  return (
    <div className="emi-page">
      <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className="calculator-form">
        <div className="input-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </div>
        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate (Annual %)</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <label htmlFor="loanTenure">Loan Tenure (Years)</label>
          <input
            type="number"
            id="loanTenure"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            placeholder="Enter loan tenure"
          />
        </div>
        <button className="calculate-button" onClick={calculateEMI}>Calculate EMI</button>
      </div>
      {emi && (
        <div className="result">
          <h3>Results</h3>
          <div className="result-item">
            <span>EMI:</span> ₹{emi}
          </div>
          <div className="result-item">
            <span>Total Interest:</span> ₹{totalInterest}
          </div>
          <div className="result-item">
            <span>Total Payment:</span> ₹{totalPayment}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default EMICalculator;
