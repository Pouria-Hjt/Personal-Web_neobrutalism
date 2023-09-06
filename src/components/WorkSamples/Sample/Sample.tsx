import React from "react";
import TechBox from "./TechBox/TechBox";
interface SampleProps {
  pic: string;
  name: string;
  about: string;
  techs: string[];
  link: string;
}
const Sample = ({ pic, name, about, techs, link }: SampleProps) => {
  return (
    <div className="w-1/2 lg:w-full md:flex-col md:justify-center md:items-center h-fit min-h-[20rem] bg-quaternary rounded-2xl border-2 border-black p-4 overflow-hidden flex gap-4">
      <div className="overflow-hidden w-1/2 md:w-full h-80 rounded-lg object-contain ">
        <img
          src={pic}
          alt=""
          className={
            pic === "/moonweb.png"
              ? "object-cover w-full h-full"
              : "object-bottom transition-transform duration-[5000ms] transform hover:-translate-y-[calc(100%-18rem)]"
          }
        />
      </div>
      <div className="w-1/2 md:w-full h-full flex flex-col gap-2">
        <h3 className="text-lg font-bold">وب‌سایت {name}</h3>
        <p className="text-sm">{about} </p>
        <h3 className="text-lg font-bold">تکنولوژی‌های مورد استفاده :</h3>
        <div className="flex justify-between items-center flex-wrap gap-2">
          {techs.map((tech) => (
            <TechBox name={tech} key={tech} />
          ))}
        </div>
        <div className="flex justify-end mt-5 items-center">
          <a
            target="_blank"
            href={link}
            className="bg-tertiary w-32 h-9 text-white flex justify-center items-center rounded-lg shadow-primary-shadow shadow-black text-sm">
            مشاهده نمونه‌کار
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sample;
