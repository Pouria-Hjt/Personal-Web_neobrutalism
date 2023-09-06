"use client";
import React from "react";
import MenuItem from "./MenuItem/MenuItem";
function Menu(): JSX.Element {
  // you can use this function to download resume
  const handleDownloadResume = () => {
    /* 
        please change this path to your resume file path
        for example: let resumeFile = "/my-resume.pdf";
    */
    let resumeFile: string = "/pouria-hajati-CV.pdf";
    window.open(resumeFile, "_blank");
  };
  return (
    <div className="w-fit h-full flex justify-center items-center gap-6">
      <MenuItem link={"#about"} text={"درباره من"} />
      <MenuItem link={"#contact"} text={"ارتباط با من"} />
      <MenuItem link={"#ability"} text={"مهارت‌ها"} />
      <MenuItem link={"#projects"} text={"پروژه ها"} />
      <button
        onClick={handleDownloadResume}
        className="w-fit h-fit px-8 py-4 bg-secondary rounded-md shadow-primary-shadow shadow-black text-white mr-5">
        دانلود رزومه
      </button>
    </div>
  );
}

export default Menu;
