import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import EMICalculator from './Pages/EMI/EMIcalculator';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/emi" element={<EMICalculator />} />
        </Routes>
    </Router>
  );
}

export default App;
