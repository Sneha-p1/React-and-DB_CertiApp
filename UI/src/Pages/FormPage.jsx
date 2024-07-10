import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCerti from '../Components/FormCerti'; // Adjust path as needed

const FormPage = () => {
  const [course, setCourse] = useState('CBA');
  const [cerid, setCerid] = useState('');
  const [cname, setCname] = useState('');
  const [grade, setGrade] = useState('S');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const newcerti = {
      course,
      cerid,
      cname,
      grade,
      date
    };

    try {
      const res = await addCertificate(newcerti);
      console.log("Response:", res);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addCertificate = async (newcerti) => {
    const res = await fetch('http://localhost:3004/submitform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newcerti),
    });
    return res.json(); // Assuming response is JSON, adjust as per your API
  };

  return (
    <>
      <div className='bg-cyan-50'>
        <h1 className="text-3xl font-medium mt-2">Certificate Dapp</h1>
        <div className="box-content w-2/4 h-6/6 mb-12 shadow-lg mx-auto mt-28 pl-4 pt-4 bg-white">
          <form onSubmit={submitForm}>
            <p className="text-xl font-medium">Issue New Certificate</p><br />
            <p>Select Course*</p>
            <select id="course" name="course" className="w-96 h-9 rounded-md"
              value={course}
              onChange={(e) => setCourse(e.target.value)}>
              <option value="CBA">Certified Blockchain Associate</option>
              <option value="CED">Certified Ethereum Developer</option>
              <option value="CHF">Certified Hyperledger Fabric Developer</option>
            </select>
            <p>Certificate ID*</p>
            <input type="text" className="w-96 h-9 rounded-md border-2"
              name="cerid"
              id="cerid"
              value={cerid}
              onChange={(e) => setCerid(e.target.value)} />
            <p>Candidate name*</p>
            <input type="text" className="w-96 h-9 rounded-md border-2"
              name="cname"
              id="cname"
              value={cname}
              onChange={(e) => setCname(e.target.value)}
            />
            <p>Select Grade*</p>
            <select name="grade" className="w-96 h-9 rounded-md border-2"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}>
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <p>Issue Date*</p>
            <input type="date" className="w-96 h-9 rounded-md border-2"
              name='date'
              id='date'
              value={date}
              onChange={(e) => setDate(e.target.value)} /><br /><br />
            <button type="submit" className="bg-cyan-600 hover:bg-sky-600 hover:text-white w-36 h-10 rounded mb-12">Issue certificate</button>
          </form>
        </div>
      </div>
      {/* <FormCerti /> */}
    </>
  )
}

export default FormPage;
