import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage'; 
import StudentDetailsPage from './StudentDetailsPage';
import UserProfilePage from './UserProfilePage';
import NavBar from './NavBar';

function App(){
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {'./HomePage'}
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;