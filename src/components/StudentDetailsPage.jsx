// StudentDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function StudentDetailsPage() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  // Dummy function to fetch student details based on studentId
  const fetchStudentDetails = async () => {
    try {
      // Simulating an API call to fetch student details
      const response = await fetch(`https://api.example.com/students/${studentId}`);
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, [studentId]);

  return (
    <div>
      <h1>Student Details</h1>
      {student ? (
        <div>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Program: {student.program}</p>
          <Link to="/">Back</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StudentDetailsPage;