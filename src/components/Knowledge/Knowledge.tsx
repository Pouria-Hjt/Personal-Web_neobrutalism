import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Tech from "./Tech/Tech";
const Knowledge = () => {
  return (
    <section
      className="w-full h-fit flex justify-center items-center flex-col gap-12"
      id="ability">
      <SectionHeading title="مهارت‌ها" />
      <div className="w-full place-items-center grid grid-cols-4 md:!grid-cols-1 lg:grid-cols-3 gap-2">
        <Tech name="HTML & CSS" percent={90} />
        <Tech name="Tailwind.css" percent={90} />
        <Tech name="Sass" percent={80} />
        <Tech name="JavaScript" percent={60} />
        <Tech name="Git & GitHub" percent={50} />
        <Tech name="React.js" percent={50} />
        <Tech name="TypeScript" percent={40} />
        <Tech name="Next.js" percent={40} />
      </div>
    </section>
  );
};

export default Knowledge;
