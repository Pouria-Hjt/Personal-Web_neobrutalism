import React, { Dispatch } from "react";
interface ContactInpProps {
  title: string;
  inputName: string;
  changeEvent: Dispatch<React.SetStateAction<string>>;
  valueState: string;
}
const ContactInp = ({
  title,
  inputName,
  changeEvent,
  valueState,
}: ContactInpProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeEvent(e.target.value);
  };
  return (
    <div className="w-1/2 lg:w-full">
      <h4 className="text-lg font-bold">{title}</h4>
      <input
        type="text"
        name={inputName}
        className="w-full h-10 bg-white mt-2 rounded shadow-primary-shadow shadow-black px-2 text-sm outline-none"
        placeholder={title}
        onChange={handleChange}
        value={valueState}
      />
    </div>
  );
};

export default ContactInp;
