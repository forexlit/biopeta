import React from "react";

const Level = ({ positive, filled }) => {
  return (
    <div className="grid grid-cols-12 gap-1">
      {[...Array(4)].map((_, index) => (
        <div className="col-span-3" key={index}>
          <div
            className={`h-2 w-full rounded-sm ${
              index < filled
                ? positive
                  ? "bg-[#5aba7d]"
                  : "bg-red-300"
                : "bg-gray-200"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Level;
