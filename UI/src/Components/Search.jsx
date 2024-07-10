import React, { useState } from 'react'

const Search = () => {
  const [idno, setIdno] = useState('');

  const formSubmit = (event) => {
    event.preventDefault(); 

    const link = `/certificate/${idno}`;
    console.log(idno);
    window.location.href = link; 
  };
  return (
    <>
    <br/><br/>
     {/* <div className="mx-auto text-center">
        <input  type="search" onChange={} value={Enter Certificate ID to View} className="border-2 w-80 h-9 pl-4 ml-10 rounded-2xl text-slate-500 bg-white"/>
      <span className="px-4"> 
        <input type="button" name="" value="Search" className="bg-cyan-700 w-20 h-9 text-white hover:bg-sky-500 rounded-xl"/>
      </span> 

    </div> */}

<div className="mx-auto text-center">
      <form onSubmit={formSubmit}>
            <input
              type="text"
              name="idno"
              id="idno"
              placeholder="Enter Certificate ID to View:"
              className="border-2 w-80 h-9 pl-4 ml-10 rounded-2xl text-slate-500 bg-white"
              value={idno}
              onChange={(e) => setIdno(e.target.value)}
            /> 
            <button type="submit" className="bg-cyan-700 w-20 h-9 text-white hover:bg-sky-500 rounded-xl">
              Search
            </button>
      </form>
</div>
    </>
  )
}

export default Search