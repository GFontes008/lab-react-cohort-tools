import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  const students = [
    { _id: 1, name: "John Doe" },
    { _id: 2, name: "Jane Smith" },
    { _id: 3, name: "Bob Johnson" }
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <Link to={`/students/${student._id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;