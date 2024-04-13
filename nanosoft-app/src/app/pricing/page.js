import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import PricingSectionComp from "./compo/PricingSectionComp";

const Page = () => {
  return (
    <>
      <Header1 />
      <div className='pt-[80px]'>
        <div className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          Pricing
        </div>
        </div>
      <PricingSectionComp />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;
