import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import StudentForm from './StudentReg/Studentform';
import SchoolReg from './registrationForm/SchoolReg';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/student-registration">Student Registration</Link>
            </li>
            <li>
              <Link to="/school-registration">School Registration</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-registration" element={<StudentForm />} />
          <Route path="/school-registration" element={<SchoolReg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;