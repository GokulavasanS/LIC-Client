import React, { useState } from 'react';
import './EMICalculator.css';

function EMICalculator() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [insuranceCover, setInsuranceCover] = useState('');
  const [hlv, setHlv] = useState(null);
  const [userData, setUserData] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!age || age <= 0) validationErrors.age = 'Enter a valid age';
    if (!retirementAge || retirementAge <= age) validationErrors.retirementAge = 'Enter a valid retirement age';
    if (!annualIncome || annualIncome <= 0) validationErrors.annualIncome = 'Enter a valid annual income';
    if (!monthlyIncome || monthlyIncome <= 0) validationErrors.monthlyIncome = 'Enter a valid monthly income';
    if (!insuranceCover || insuranceCover <= 0) validationErrors.insuranceCover = 'Enter a valid insurance cover';
    return validationErrors;
  };

  const calculateHLV = () => {
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const yearsLeft = retirementAge - age;
    const hlv = (annualIncome * yearsLeft) - insuranceCover;

    setUserData({
      name,
      age,
      retirementAge,
      annualIncome,
      monthlyIncome,
      insuranceCover
    });

    setHlv(hlv.toFixed(2));
    setErrors({});
  };

  return (
    <div className="emi">
    <div className="hlv-page">
      <div className="hlv-calculator">
        <h2>Human Life Value Calculator</h2>
        
        {/* Personal Details Section */}
        <div className="section-title">Personal Details</div>
        <div className="calculator-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="retirementAge">Desired Retirement Age</label>
            <input
              type="number"
              id="retirementAge"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              placeholder="Enter your desired retirement age"
            />
            {errors.retirementAge && <span className="error">{errors.retirementAge}</span>}
          </div>
        </div>

        {/* Financial Details Section */}
        <div className="section-title">Financial Details</div>
        <div className="calculator-form">
          <div className="input-group">
            <label htmlFor="annualIncome">Annual Income</label>
            <input
              type="number"
              id="annualIncome"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              placeholder="Enter your annual income"
            />
            {errors.annualIncome && <span className="error">{errors.annualIncome}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="monthlyIncome">Monthly Income</label>
            <input
              type="number"
              id="monthlyIncome"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              placeholder="Enter your monthly income"
            />
            {errors.monthlyIncome && <span className="error">{errors.monthlyIncome}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="insuranceCover">Existing Insurance Cover</label>
            <input
              type="number"
              id="insuranceCover"
              value={insuranceCover}
              onChange={(e) => setInsuranceCover(e.target.value)}
              placeholder="Enter your insurance cover"
            />
            {errors.insuranceCover && <span className="error">{errors.insuranceCover}</span>}
          </div>
          <button className="calculate-button" onClick={calculateHLV}>Calculate</button>
        </div>

        {/* Display Results */}
        {hlv && (
          <div className="result">
            <h3>Results</h3>
            <div className="result-item">
              <span>Human Life Value:</span> ₹{hlv}
            </div>
            <h4>User Details</h4>
            <div className="result-item">
              <span>Name:</span> {userData.name}
            </div>
            <div className="result-item">
              <span>Age:</span> {userData.age}
            </div>
            <div className="result-item">
              <span>Retirement Age:</span> {userData.retirementAge}
            </div>
            <div className="result-item">
              <span>Annual Income:</span> ₹{userData.annualIncome}
            </div>
            <div className="result-item">
              <span>Monthly Income:</span> ₹{userData.monthlyIncome}
            </div>
            <div className="result-item">
              <span>Existing Insurance Cover:</span> ₹{userData.insuranceCover}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default EMICalculator;
