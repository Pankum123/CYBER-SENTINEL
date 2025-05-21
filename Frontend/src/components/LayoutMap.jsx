import React from "react";
import KeywordLineChart from "./KeywordLineChart";

function LayoutMap() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 md:flex justify-between">
      
        <div className="bg-gray-100 dark:bg-white rounded-xl shadow mt-2 w-160">
          <h2 className="text-lg text-black font-semibold mb-2">
            Keyword Spread Over Time
          </h2>
          <KeywordLineChart />
        </div>

        <div className="bg-gray-100 dark:bg-white rounded-xl shadow mt-2 w-160">
          <h2 className="text-lg text-black font-semibold mb-2">
            Keyword Spread Over Time
          </h2>
          <KeywordLineChart />
        </div>



    </div>
  );
}

export default LayoutMap;
