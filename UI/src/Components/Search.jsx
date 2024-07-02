import React from 'react'

const Search = () => {
  return (
    <>
     <div className="mx-auto text-center">
        <input type="search" name="" value="Enter Certificate ID to View" className="border-2 w-80 h-9 pl-4 rounded-2xl text-slate-500 bg-white"/>
      <span className="px-4"> 
        <input type="button" name="" value="Search" className="bg-cyan-700 w-20 h-9 text-white hover:bg-sky-500 rounded-xl"/>
      </span> 

    </div>
    </>
  )
}

export default Search