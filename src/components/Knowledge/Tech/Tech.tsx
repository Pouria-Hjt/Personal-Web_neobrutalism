import React from "react";
interface TechProps {
  name: string;
  percent: number;
}
const Tech = ({ name, percent }: TechProps) => {
  return (
    <div className="w-64 md:w-11/12 h-fit flex flex-col justify-end items-end gap-2">
      <p>{name}</p>
      <div
        className={`w-full h-6 bg-[#C9E2FA] rounded relative before:w-[${percent}%] before:rounded before:absolute before:h-full before:bg-tertiary before:left-0`}></div>
    </div>
  );
};

export default Tech;
