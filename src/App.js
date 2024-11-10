import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './landingpage/Home';
import About from './landingpage/About';
import Contact from './landingpage/Contact';
import Navbar from './landingpage/Navbar';
import StudentForm from './registrationForm/Studentform';
import SchoolReg from './registrationForm/SchoolReg';
import PartnerReg from './registrationForm/PartnerReg';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-registration" element={<StudentForm />} />
          <Route path="/school-registration" element={<SchoolReg />} />
          <Route path="/partner-registration" element={<PartnerReg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
