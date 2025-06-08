import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import SubmissionDetails from './SubmissionDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/submission" element={<SubmissionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
