import Header1 from "@/components/Header1";
import React from "react";
import AlgoSection from "./compo/algoSectionComp";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Header1 />
      <div className='pt-[80px]'>
        <div className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          Algo trading
        </div>
        </div>
      <AlgoSection />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;
