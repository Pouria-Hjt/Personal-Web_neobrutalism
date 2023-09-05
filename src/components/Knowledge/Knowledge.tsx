import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Tech from "./Tech/Tech";
const Knowledge = () => {
  return (
    <div className="w-full h-fit flex justify-center items-center flex-col gap-12">
      <SectionHeading title="مهارت‌ها" />
      <div className="w-full flex gap-5 flex-wrap justify-center items-center flex-row-reverse">
        <Tech name="HTML & CSS" percent={90} />
        <Tech name="Tailwind.css" percent={90} />
        <Tech name="Sass" percent={80} />
        <Tech name="JavaScript" percent={60} />
        <Tech name="Git & GitHub" percent={50} />
        <Tech name="React.js" percent={50} />
        <Tech name="TypeScript" percent={40} />
        <Tech name="Next.js" percent={40} />
      </div>
    </div>
  );
};

export default Knowledge;
