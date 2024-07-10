import React from 'react'

const FormCerti = () => {
  return (
    <>
    <br/>
    <div class="box-content w-2/4 h-6/6 mb-12 shadow-lg mx-auto mt-28 pl-4 pt-4 bg-white">
        <form>
            <p class="text-xl font-medium">Issue New Certificate</p><br/>
            <p>Select Course*</p>
            <select nameClass="course" class="w-96 h-9 rounded-md">
                <option value="CBA" selected >Certified Blockchain Associate</option>
                <option value="CED">Certified Ethereum Developer</option>
                <option value="CHF">Certified Hyperledger Fabric Developer</option>
            </select>
            <p>Certificate ID*</p>
            <input type="text" value="Certificate ID" class="w-96 h-9 rounded-md border-2"/>
            <p>Candidate nameClass*</p>
            <input type="text" value="nameClass" class="w-96 h-9 rounded-md border-2"/>
            <p>Select Grade*</p>
            <select nameClass="Grade" class="w-96 h-9 rounded-md border-2">
                <option value="Grade" selected >S</option>
                <option value="Grade">A</option>
                <option value="Grade">B</option>
                <option value="Grade">C</option>
                <option value="Grade">D</option>
                <option value="Grade">E</option>
                <option value="Grade">F</option>
            </select>
            <p>Issue Date*</p>
            <input type="date" class="w-96 h-9 rounded-md border-2"/><br/><br/>
            <a href="/Print">
            <input type="button" value="Issue Certificate" class="bg-cyan-600 hover:bg-sky-600 hover:text-white w-36 h-10 rounded mb-12"/></a>
        </form>
    </div>
    </>
  )
}

export default FormCerti