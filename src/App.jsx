import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StudentDetailsPage from './StudentDetailsPage';
import UserProfilePage from './UserProfilePage';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;