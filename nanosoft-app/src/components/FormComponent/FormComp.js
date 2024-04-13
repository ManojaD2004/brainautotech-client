"use client";
import React, { useEffect, useRef, useState } from "react";
import Randomstring from "randomstring";

function FormComp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaId, setCaptchaId] = useState("");
  const [captchaString, setCaptchaString] = useState("");
  useEffect(() => {
    setCaptchaString(Randomstring.generate(4).toLowerCase());
  }, []);

  return (
    <div className="w-full py-6">
      <form className="md:w-[560px] md:px-0 w-full px-4 mx-auto flex flex-col justify-between items-center space-y-4">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full">
          <input
            value={name}
            className="border-2 border-slate-300 rounded-md text-black focus:outline-0 p-2 focus:shadow-lg focus:border-slate-400 shadow-sm duration-200 transition-shadow"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <input
            value={email}
            className="border-2 border-slate-300 rounded-md text-black focus:outline-0 p-2 focus:shadow-lg focus:border-slate-400 shadow-sm duration-200 transition-shadow"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
          />
        </div>
        <input
          value={subject}
          className="border-2 w-full border-slate-300 rounded-md text-black focus:outline-0 p-2 focus:shadow-lg focus:border-slate-400 shadow-sm duration-200 transition-shadow"
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <textarea
          value={message}
          
          rows={5}
          className="border-2 w-full border-slate-300 rounded-md text-black focus:outline-0 p-2 focus:shadow-lg focus:border-slate-400 shadow-sm duration-200 transition-shadow"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <span className="text-white self-start bg-purple-700 p-2 rounded-md">{captchaString}</span>
        <input
          value={captchaId}
          className="self-start border-2 border-slate-300 rounded-md text-black focus:outline-0 p-2 focus:shadow-lg focus:border-slate-400 shadow-sm duration-200 transition-shadow"
          onChange={(e) => setCaptchaId(e.target.value)}
          placeholder="Captcha Id"
        />
        <button
        type="submit"
        className="bg-red-500 text-white py-2 self-start text-lg rounded-md px-10 duration-200 hover:bg-red-600 hover:shadow-lg shadow-sm transition-all"
        >Submit</button>
      </form>
    </div>
  );
}

export default FormComp;
