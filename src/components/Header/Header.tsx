import React from "react";
import MacCircleContainer from "./MacCircleContainer/MacCircleContainer";
import WebUrl from "./WebUrl/WebUrl";
import ResumeDataBox from "./ResumeDataBox/ResumeDataBox";
const Header = () => {
  return (
    <header className="w-full h-[calc(100vh-96px)] bg-gradient-to-r bg-gradient__header flex justify-center items-center">
      <div className="w-2/5 lg:w-4/5 h-4/5 md:h-2/3 bg-septenary rounded-3xl border-[3px] border-black shadow-secondary-shadow md:shadow-primary-shadow md:shadow-[#53AFB6] shadow-[#53AFB6] pt-8 relative">
        <ResumeDataBox />
        <div className="w-full h-14 gap-6 pl-8 md:pl-1 md:px-1 flex justify-start flex-row-reverse items-center">
          <MacCircleContainer />
          <WebUrl />
        </div>
        <div className="w-full h-[calc(100%-56px)] bg-header-image bg-contain bg-no-repeat bg-center_bottom"></div>
      </div>
    </header>
  );
};

export default Header;
