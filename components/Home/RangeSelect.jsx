import { useState } from "react";

function RangeSelect({ onRadiusChange }) {
  const [radius, setRadius] = useState(2500);

  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold ">Select Radius (In Meter)</h2>
      <input
        type="range"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min={500}
        max={5000}
        step={500}
        defaultValue={radius}
        onChange={(e) => {
          setRadius(e.target.value);
          onRadiusChange(e.target.value);
        }}
      />
      <label className="text-gray-500 text-[15px]">{radius} Meter</label>
    </div>
  );
}

export default RangeSelect;
