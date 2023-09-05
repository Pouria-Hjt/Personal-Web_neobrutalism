"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";
function NavBar(): JSX.Element {
  const sideMenuRef = useRef<HTMLDivElement>(null);
  const handleDownloadResume = (): void => {
    /* 
        please change this path to your resume file path
        for example: let resumeFile = "/my-resume.pdf";
    */
    let resumeFile: string = "/pouria-hajati-CV.pdf";
    window.open(resumeFile, "_blank");
  };
  const sideMenuHandeler = (): void => {
    sideMenuRef.current?.classList.toggle("w-0");
    sideMenuRef.current?.classList.toggle("w-full");
  };
  return (
    <>
      <nav className=" md:hidden w-full h-24 bg-white px-primary lg:px-5 flex justify-between items-center border-b-2 border-black">
        <div className="w-fit h-fit flex gap-5 items-center">
          <Image
            src={"/logo.png"}
            width={44}
            height={44}
            className="h-11"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold">پوریا حاجتی</h1>
        </div>
        <Menu />
      </nav>
      <nav className="md:flex hidden w-full h-24 bg-gradient__header justify-between items-center px-5 sm:px-2">
        <div className="flex gap-3 h-full justify-center items-center w-1/2">
          <Image
            src={"/logo.png"}
            width={44}
            height={44}
            className="h-11"
            alt="Logo"
          />
          <h1 className="text-xl sm:text-lg font-bold">پوریا حاجتی</h1>
        </div>
        <div className="w-1/2 h-full flex justify-around items-center">
          <div
            onClick={sideMenuHandeler}
            className="h-10 w-10 bg-quinary rounded shadow-primary-shadow shadow-black flex justify-center items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                fill="white"
              />
              <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                fill="white"
              />
              <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                fill="white"
              />
            </svg>
          </div>
          <button
            onClick={handleDownloadResume}
            className="w-fit h-10 px-2 bg-secondary text-sm rounded-md shadow-primary-shadow shadow-black text-white">
            دانلود رزومه
          </button>
        </div>
      </nav>
      <div
        ref={sideMenuRef}
        className="w-0 h-screen bg-octonary fixed top-0 z-50 overflow-hidden transition-all">
        <div className="w-full h-full flex flex-col items-center p-10 gap-3">
          <svg
            onClick={sideMenuHandeler}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="black"
            />
            <path
              d="M9.16986 15.58C8.97986 15.58 8.78986 15.51 8.63986 15.36C8.34986 15.07 8.34986 14.59 8.63986 14.3L14.2999 8.63999C14.5899 8.34999 15.0699 8.34999 15.3599 8.63999C15.6499 8.92999 15.6499 9.40998 15.3599 9.69998L9.69986 15.36C9.55986 15.51 9.35986 15.58 9.16986 15.58Z"
              fill="black"
            />
            <path
              d="M14.8299 15.58C14.6399 15.58 14.4499 15.51 14.2999 15.36L8.63986 9.69998C8.34986 9.40998 8.34986 8.92999 8.63986 8.63999C8.92986 8.34999 9.40986 8.34999 9.69986 8.63999L15.3599 14.3C15.6499 14.59 15.6499 15.07 15.3599 15.36C15.2099 15.51 15.0199 15.58 14.8299 15.58Z"
              fill="black"
            />
          </svg>
          <MenuItem
            event={sideMenuHandeler}
            link={"#about"}
            text={"درباره من"}
          />
          <MenuItem event={sideMenuHandeler} link={"#"} text={"ارتباط با من"} />
          <MenuItem event={sideMenuHandeler} link={"#"} text={"مهارت‌ها"} />
          <MenuItem
            event={sideMenuHandeler}
            link={"#contact"}
            text={"پروژه ها"}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
