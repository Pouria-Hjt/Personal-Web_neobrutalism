import React from "react";

const TechBox = ({ name }: { name: string }) => {
  return (
    <div className="w-20 h-7 rounded bg-tertiary flex justify-center items-center text-white text-sm">
      {name}
    </div>
  );
};

export default TechBox;
