import Header1 from '@/components/Header1'
import React from 'react'
import Itservicessection from './compo/Itservicessection'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <Header1 />
      <div className="pt-[80px]">
        <div className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          IT-services
        </div>
      </div>
      <Itservicessection />
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
}

export default Page