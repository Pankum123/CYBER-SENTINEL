import React from "react";

function SearchBox() {
  return (
    <div className="w-100">
      <form action="">
        <div>
           <label className="border-[1px] rounded-lg border-gray-700 bg-slate-900 p-3 flex items-center gap-2">
            <input type="search" className="grow outline-none h-4" placeholder="Enter Keyword" />
          </label> 
        </div>
      </form>
    </div>
  );
}

export default SearchBox;


// import React from "react";
// import { FaSearch } from "react-icons/fa";

// function Search() {
//   return (
//     <div className="h-[10vh]">
//       <div className="px-6 py-4">
//       <form action="">
//         <div className="flex space-x-3">
//           <label className="border-[1px] rounded-lg border-gray-700 bg-slate-900 p-3 flex items-center gap-2 w-[80%]">
//             <input type="search" className="grow outline-none" placeholder="Search" />
//           </label>
//           <button>
//             <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Search;
