"use client";
import Footer from "@/components/Footer";
import FormComp from "@/components/FormComponent/FormComp";
import Header1 from "@/components/Header1";
import React from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

import dynamic from "next/dynamic";

const SimpleMap = dynamic(() => import("./components/SimpleMap"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <Header1 />
      <div className="pt-[80px] pb-[30px]">
        <div className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh]">
          Contact Us
        </div>
        <div className="px-[5%] xl:px-[25%]">
          <h1 className="text-left text-[6vh] font-bold text-black  pt-[30px]">
            Contact Us
          </h1>
          <h2 className="text-left text-[3vh] font-bold text-black  pt-[30px]">
            Contact Information
          </h2>
          <div className="text-lg list-none">
            <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
              <span className="text-red-500 font-bold fa">
                <FontAwesomeIcon icon={faPhone} />
              </span>{" "}
              <a href="tel:9691315858"> : +91 9691315858</a>
            </li>
            <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
              <a href="mailto:Braintechintelligence@gmail.com">
                <span className="text-red-500 font-bold">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>{" "}
                : brainautotech1902@gmail.com
              </a>
            </li>
            <li className="text-left text-[#555555]  p1 pt-[30px] font-medium ">
              <span className="text-red-500 font-bold">
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              </span>
              <a href="#map">
                   : Sai kripa colony, Radisson square, Indore, Madhya Pradesh 452010
              </a>
            </li>
          </div>
        </div>
      </div>
      <FormComp />
      <div className="py-4 w-full">
        <SimpleMap />
      </div>
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;
