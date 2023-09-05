import Image from "next/image";
import React from "react";
import Menu from "./Menu/Menu";
function NavBar(): JSX.Element {
  return (
    <nav className="w-full h-24 bg-white px-primary flex justify-between items-center border-b-2 border-black">
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
  );
}

export default NavBar;
