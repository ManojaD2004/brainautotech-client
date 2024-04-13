"use client";
import React, { useState } from "react";
import Itservicescontent from "@/data/ItServices/Itservicescontent";
import GreyCard1 from "./Itservicescompos/GreyCard1";
import { AnimatePresence } from "framer-motion";
import PopUp from "@/components/PopUp";
import popUpsData from "@/data/PopUps/PopUpsData";

const Itservicessection = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} key={isOpen} />
        )}
      </AnimatePresence>
      <div className="pt-[40px]">
        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 mt-7 flex justify-evenly flex-row items-center flex-wrap">
          {Itservicescontent.map((greyCardProps, index) => (
            <GreyCard1
              key={index}
              {...greyCardProps}
              index={index}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Itservicessection;
