import React from 'react';
//import './App.css';
import './index.css';
import './StudentReg/Studentform.css';
import StudentForm from './StudentReg/Studentform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Registration</h1>
        <StudentForm />
      </header>
    </div>
  );
}

export default App;