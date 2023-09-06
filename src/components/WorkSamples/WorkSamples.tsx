import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Sample from "./Sample/Sample";
const WorkSamples = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center my-14 py-14 bg-gradient__works gap-14 p-page">
      <SectionHeading title="نمونه کارها" />
      <div className="w-full h-fit flex justify-center items-start gap-4 lg:flex-col">
        <Sample
          about="این پروژه به درخواست عباس داورپناه برای همایش بزرگ گنو/لینوکس شیراز به صورت spa توسعه داده شد و سعی کردم به بهترین نحو ممکن پیاده سازیش کنم"
          link="https://event.shirazlinuxcommunity.ir/"
          name="ShirazLinuxEvent"
          pic="/shirazlinux_event.png"
          techs={["react.js", "swiper.js"]}
          key={1}
        />
        <Sample
          about="این پروژه به درخواست ابوالفضل محمدی برای تیم دولوپری دیسکورد مون‌تیم ساخته شد"
          link="https://moonweb.netlify.app/"
          name="MoonTeam"
          pic="/moonweb.png"
          techs={[
            "javascript",
            "particle.js",
            "sass",
            "swiper.js",
            "typed.js",
            "vanilla-tilt.js",
          ]}
          key={2}
        />
      </div>
    </section>
  );
};

export default WorkSamples;
