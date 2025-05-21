import React from "react";

function SearchBox() {
  return (
    <div className="w-130">
      <form action="">
        <div>
           <label className="border-[1px] rounded-lg border-gray-700  p-3 flex items-center gap-2">
            <input type="search" className="grow outline-none h-5" placeholder="Enter Keyword" />
          </label> 
        </div>
      </form>
    </div>
  );
}

export default SearchBox;


