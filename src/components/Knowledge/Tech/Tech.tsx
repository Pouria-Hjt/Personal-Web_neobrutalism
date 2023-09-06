import React from "react";
interface TechProps {
  name: string;
  percent: number;
}
const Tech = ({ name, percent }: TechProps) => {
  const className =
    "before:w-[10%]" ||
    "before:w-[20%]" ||
    "before:w-[30%]" ||
    "before:w-[40%]" ||
    "before:w-[50%]" ||
    "before:w-[60%]" ||
    "before:w-[70%]" ||
    "before:w-[80%]" ||
    "before:w-[90%]";

  return (
    <div className="w-64 md:w-11/12 h-fit flex flex-col justify-end items-end gap-2">
      <p>{name}</p>
      <div
        className={`w-full h-6 bg-quaternary rounded relative before:w-[${percent}%] before:rounded before:absolute before:h-full before:bg-tertiary before:left-0`}></div>
    </div>
  );
};

export default Tech;
