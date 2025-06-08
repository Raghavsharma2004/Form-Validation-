import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SubmissionDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  if (!state) {
    // If no state is passed, redirect to the form
    navigate('/');
    return null;
  }

  const {
    firstName,
    lastName,
    username,
    email,
    phoneCode,
    phoneNumber,
    country,
    city,
    pan,
    aadhar,
  } = state;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Submission Details</h2>
      <ul>
        <li><strong>First Name:</strong> {firstName}</li>
        <li><strong>Last Name:</strong> {lastName}</li>
        <li><strong>Username:</strong> {username}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone Number:</strong> +{phoneCode} {phoneNumber}</li>
        <li><strong>Country:</strong> {country}</li>
        <li><strong>City:</strong> {city}</li>
        <li><strong>PAN Number:</strong> {pan}</li>
        <li><strong>Aadhar Number:</strong> {aadhar}</li>
      </ul>
    </div>
  );
}

export default SubmissionDetails;
