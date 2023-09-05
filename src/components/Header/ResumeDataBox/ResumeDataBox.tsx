import React from "react";

const ResumeDataBox = () => {
  return (
    <pre
      className="w-fit h-fit absolute bg-white break-words p-5 top-1/2 rounded-2xl shadow-tertiary-shadow shadow-octonary -right-1/2 translate-x-10 lg:-right-10 sm:text-xs sm:p-3 sm:bottom-0 sm:top-auto sm:!right-1/2 sm:translate-y-1/2 sm:sm:translate-x-1/2"
      dir="ltr">
      <span className="text-[#D32F2F]">async function</span>{" "}
      <span className="text-secondary">getResumeData()</span> {`{`} <br />
      &nbsp;&nbsp;&nbsp;<span className="text-[#D32F2F]">const </span>
      <span className="text-tertiary">fetchData</span> = <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-[#D32F2F]">await</span>{" "}
      <span className="text-secondary">fetch</span>
      (&apos;https://poriw.ir/resume&apos;) <br />
      &nbsp;&nbsp;&nbsp;const data =
      <span className="text-[#D32F2F]">await</span>{" "}
      <span className="text-tertiary">fetchData</span>
      <span className="text-secondary">.json()</span> <br />
      {`}`}
    </pre>
  );
};

export default ResumeDataBox;
