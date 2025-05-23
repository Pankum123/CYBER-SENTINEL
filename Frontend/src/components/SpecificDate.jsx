import React from 'react'

function SpecificDate() {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div>
      <input
        type="date"
        className="border-[1px] rounded-lg border-gray-700 px-4 flex items-center grow outline-none w-45 h-11 light:text-black"
        defaultValue= {today}
      />
    </div>
  )
}

export default SpecificDate
