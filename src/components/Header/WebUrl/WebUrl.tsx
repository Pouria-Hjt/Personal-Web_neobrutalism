import Image from "next/image";
import React from "react";

const WebUrl = () => {
  return (
    <div className=" md:w-full flex flex-row-reverse gap-2 bg-[#F9F9F9] border-2 border-black px-4 py-3 rounded-xl">
      <Image
        src={"/close-square.svg"}
        alt="close"
        width={24}
        height={24}
        className="md:hidden"
      />
      <p className="text-sm">poriw.me - front-end developer</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="md:inline-block hidden"
        fill="none">
        <path
          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default WebUrl;
