import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
const AboutMe = () => {
  return (
    <div
      className="w-full h-fit flex justify-center items-center flex-col bg-white py-20 p-page"
      id="about">
      <SectionHeading title="درباره من" />
      <div className="w-full h-fit flex flex-row-reverse justify-between items-center py-20 gap-20 md:flex-col md:gap-10">
        <div className="w-2/5 md:w-11/12 h-80 bg-quaternary bg-about-image bg-contain bg-no-repeat  bg-center rounded-2xl shadow-tertiary-shadow shadow-black"></div>
        <p className="w-3/5 md:w-11/12 h-fit text-base text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
