"use client";
import React, { FormEventHandler, useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import ContactInp from "./ContactInp/ContactInp";

const ContactMe = () => {
  const [name, setName] = useState(" ");
  const [email, seteMail] = useState(" ");
  const [text, setText] = useState(" ");
  const handleUserMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetch("http://localhost:4000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, value: text }),
    });
    if (data.status == 204) {
      setName("");
      seteMail("");
      setText("");
    }
  };
  return (
    <section
      id="contact"
      className="w-full h-fit flex justify-center items-center bg-quinary py-14 flex-col gap-12 p-page">
      <SectionHeading title="تماس با من" />
      <div className="w-full h-fit bg-senary p-6 rounded-2xl shadow-tertiary-shadow flex gap-9 md:flex-col md:justify-center md:items-center">
        <div className="w-2/5 md:w-full h-80 bg-octonary rounded-2xl flex justify-center items-center">
          <Image
            src={"/contact.png"}
            alt="contact me"
            width={300}
            height={171}
          />
        </div>
        <form
          action=""
          className="w-3/5 md:w-full h-full flex flex-col gap-6"
          onSubmit={handleUserMessage}>
          <div className="w-full flex gap-5 lg:flex-col">
            <ContactInp
              inputName="name"
              title="نام"
              changeEvent={setName}
              valueState={name}
            />
            <ContactInp
              inputName="email"
              title="آیدی تلگرام / ایمیل"
              changeEvent={seteMail}
              valueState={email}
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">متن پیام شما</h4>
            <textarea
              name="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              className="w-full h-32 mt-3 resize-none rounded-lg bg-white shadow-primary-shadow shadow-black outline-none p-2 text-sm"></textarea>
          </div>
          <button
            type="submit"
            className="w-32 h-9 bg-quinary flex justify-center items-center text-white font-bold rounded-lg text-sm">
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
