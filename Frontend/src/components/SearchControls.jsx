import React from "react";
import SearchBox from "./SearchBox";
import PlatformFilter from "./PlatformFilter";
import Region from "./Region";

function SearchControls({ onSearchClick }) {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-25 md:flex justify-between">
      <div>
        <h1 className="font-bold text-2xl my-4">Search Keyword(s) to Track</h1>
        <SearchBox />
        <PlatformFilter />
      </div>

      <div>
        <Region />
      </div>

      <div className="flex flex-row justify-between md:flex-col my-3">
        <div>
          <h1 className="font-bold text-2xl my-2 m:my-4">Date</h1>
          <input
            type="date"
            className="border-[1px] rounded-lg border-gray-700 px-2 md:px-3 flex items-center grow outline-none w-45 h-11 light:text-black"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>

        <button
          onClick={onSearchClick}
          className=" h-10 w-20 m-10 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 cursor-pointer duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchControls;
