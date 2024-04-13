"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";
import { AnimatePresence } from "framer-motion";
import popUpsData from "@/data/PopUps/PopUpsData";
import { useRouter } from "next/navigation";

function Footer() {
  const [isOpen, setIsOpen] = useState(null);
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
      <footer className="">
        <div className="lg:flex lg:justify-between  lg:px-[14vh] lg:items-start lg:space-x-4">
          <div className="flex justify-center">
            <div className="flex-row  ">
              <img src="/braintechlogo.PNG" width={180} />
              <p className="pb-[30px] pt-[10px] text-[#566a8d] pl-[12px]">
                Brain Auto Tech is a leading algorithmic <br></br>software
                provider, revolutionizing the future of <br></br>automation with
                cutting-edge solutions.
<br></br>CIN NO: U62013MP2024PTC069897
              </p>
              <div className="flex justify-start gap-4 items-start pb-8 pl-[10px]">
                <a href="https://facebook.com/brainautotech" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=48&id=118497&format=png"
                    width={36}
                  />
                </a>
                <a
                  href="https://www.instagram.com/brainautotech"
                  target="_blank"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                    width={35}
                  />
                </a>
                <a href="https://telegram.me/brainautotech" target="_blank">
                  <img
                    src="https://img.icons8.com/?size=96&id=25n4hOEoY7ss&format=png"
                    width={32}
                  />
                </a>
                <img
                  src="	https://img.icons8.com/?size=96&id=zXhRTdxWEKE5&format=png"
                  width={33}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[4vh] ">
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#00c2e0]">
                  IT services
                </li>

                <div className="text-[#566a8d] pt-[15px] text-[15px] flex-col font-medium">
                  <li className="hover:underline" onClick={() => setIsOpen(0)}>
                    Web Development
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(1)}>
                    Mobile App development
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(2)}>
                    Graphic & Video Design
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(3)}>
                    Software Development
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(4)}>
                    Game Development
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(5)}>
                    Digital Marketing
                  </li>
                  <li className="hover:underline" onClick={() => setIsOpen(6)}>
                    Partners
                  </li>
                </div>
              </ul>
            </div>
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#00c2e0]">
                  Algo Services
                </li>
                <a>
                  <div className="text-[#566a8d] pt-[15px] text-[15px] flex-col font-medium">
                    <li
                      className="hover:underline"
                      onClick={() => router.push("/api-bridge")}
                    >
                      Api Bridge
                    </li>
                    <li
                      className="hover:underline"
                      onClick={() => router.push("/algo")}
                    >
                      Algo software
                    </li>
                    <li
                      className="hover:underline"
                      onClick={() => router.push("/auto")}
                    >
                      Auto Buy & Sell signal
                    </li>
                    <li
                      className="hover:underline"
                      onClick={() => router.push("/strategy")}
                    >
                      {" "}
                      Stratergy Development
                    </li>
                  </div>
                </a>
              </ul>
            </div>
          </div>
          <div className="flex justify-center pt-[25px] lg:pt-0 lg:m-[-12px] lg:px-0 md:px-[30%] sm:px-[20%] px-[10%]">
            <div className="">
              <div className="font-bold text-[35px] text-[#00c2e0]">
                Contact Info:
              </div>
              <div className="font-semibold pt-[20px] text-[#566a8d]">
              Sai kripa colony, Radisson square, <br />
                Indore, Madhya Pradesh, 452010
              </div>
              <div className="text-[#566a8d] pt-[20px]">
                P:{" "}
                <a className="text-[#0e2b5c]" href="tel:9691315858">
                  +(91)9691315858
                </a>{" "}
                <br></br> M:{" "}
                <span className="text-[#0e2b5c]">
                brainautotech1902@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 flex justify-center text-gray-400 pb-4 font-extralight hover:underline lg:text-[12px] text-[1.5vh]">
          Brain Auto Tech &#169;2024. All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
