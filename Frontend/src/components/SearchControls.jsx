import React from "react";
import SearchBox from "./SearchBox";
import RegionBox from "./RegionBox";
import SpecificDate from "./SpecificDate";
import PlatformFilter from "./PlatformFilter";

function SearchControls() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-25 md:flex justify-between">
      <div>
        <h1 className="font-bold text-2xl my-4">Search Keyword(s) to Track</h1>
        <SearchBox />
        <PlatformFilter />
      </div>

      <div>
        <h1 className="font-bold text-2xl my-4">Region</h1>
        <RegionBox />
      </div>

      <div>
        <h1 className="font-bold text-2xl my-4">Date</h1>
        <SpecificDate />
      </div>

      {/* <div>Region</div> */}
      <button className=" mt-16 h-10 w-20 bg-blue-600  text-white font-bold rounded-md hover:bg-blue-700  cursor-pointer duration-300   ">
        Search
      </button>
 
    </div>
  );
}

export default SearchControls;
