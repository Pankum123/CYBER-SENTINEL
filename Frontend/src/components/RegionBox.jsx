import React from "react";

function RegionBox() {
  return (
    <div className="">
      <select
        defaultValue="select region"
        className="border-[1px] rounded-lg border-gray-700 dark:bg-slate-900 px-4 flex items-center grow outline-none w-80 h-10"
      >
        <option disabled={true}>Select region</option>
        <option>All Regions</option>
        <option>Date</option>
        <option>Place</option>
      </select>
      
    </div>
  );
}

export default RegionBox;
