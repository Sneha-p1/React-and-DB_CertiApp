import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Certificate = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3004/api/form/${id}`);
        const data = await res.json();
        console.log(data);
        setStudent(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchStudentDetails();
  }, [id]); // Ensure useEffect runs when `id` changes
console.log(student)
  return (
    <>
      <div className="w-4/5 h-96 shadow-lg mx-auto mt-32 bg-white">
        <h1 className="text-2xl text-center">Kerala Blockchain Academy</h1><br/>
        <img src="/src/Image/Screenshot.png" alt="Certificate" className="mx-auto flex-none w-56" /><br/>
        <p className="text-center">This is to certify that {student.cname} has successfully completed {student.course}</p>
        <p className="text-center">with {student.grade} on {student.date}</p>
      </div>
    </>
  );
};

export default Certificate;
