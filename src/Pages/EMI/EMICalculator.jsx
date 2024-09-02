import React, { useState } from 'react';
import './EMICalculator.css'; // Add your CSS file for styling

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interest) / (12 * 100);
    const n = parseFloat(tenure);

    if (P && r && n) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emi.toFixed(2));
    }
  };

  const handleReset = () => {
    setPrincipal('');
    setInterest('');
    setTenure('');
    setEmi(null);
  };

  return (
    <div className="emi">
    <div className="emi-calculator">
      <h2>EMI Calculator</h2>
      <div className="emi-inputs">
        <div className="input-group">
          <label htmlFor="principal">Principal Amount:</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>
        <div className="input-group">
          <label htmlFor="interest">Annual Interest Rate (%):</label>
          <input
            type="number"
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Enter annual interest rate"
          />
        </div>
        <div className="input-group">
          <label htmlFor="tenure">Loan Tenure (Months):</label>
          <input
            type="number"
            id="tenure"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter loan tenure in months"
          />
        </div>
      </div>
      <div className="emi-buttons">
        <button onClick={calculateEMI}>Calculate EMI</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {emi !== null && (
        <div className="emi-result">
          <h3>Your EMI is: ₹{emi}</h3>
        </div>
      )}
    </div>
    </div>
  );
};

export default EMICalculator;
