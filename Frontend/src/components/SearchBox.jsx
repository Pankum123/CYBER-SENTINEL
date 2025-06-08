import React, { useState } from "react";
import { useKeyword } from "../context/KeywordProvider"; // Importing the context

function SearchBox() {
  // Step 1: State for user input
  const [keyword, setKeyword] = useKeyword("");

  // Step 2: Function to handle input change
  const handleChange = (e) => {
    setKeyword(e.target.value);         // State update
    console.log(e.target.value);        // Print to console
  };
  console.log("SearchBox rendered : ",keyword);

  return (
    <>
      <div className=" md:w-130">
        {/* Step 3: Prevent form submit refresh */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="border-[1px] rounded-lg border-gray-700 p-3 flex items-center gap-2">
              <input
                type="search"
                className="grow outline-none h-5"
                placeholder="Enter Keyword"
                value={keyword}          // Bind input value with state
                onChange={handleChange}  // Update value on input
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBox;

