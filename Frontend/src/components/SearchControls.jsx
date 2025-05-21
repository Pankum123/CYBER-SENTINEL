import React from "react";
import SearchBox from "./SearchBox";

function SearchControls() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-25 h-30 md:flex justify-between">

      <div>
        <h1 className="font-bold text-2xl my-3">Search Keyword(s) to Track</h1>
        <SearchBox />
      </div>

      <div>
        <h1 className="font-bold text-2xl my-3">Region</h1>
        <SearchBox />
      </div>

      {/* <div>Region</div> */}
      <button className=" my-15   h-10 w-20 placeholder-red-500 border-2 bg-gray-600 text-white rounded-4xl hover:bg-amber-300  cursor-pointer duration-300   ">
        Click Me
      </button>
      
    </div>
  );
}

export default SearchControls;
