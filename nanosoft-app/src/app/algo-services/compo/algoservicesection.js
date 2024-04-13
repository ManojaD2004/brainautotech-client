"use client";
import React, { useState } from 'react'
import GreyCard1 from './algoservicescomp/GreyCard2'
import Algoservicescontent from '@/data/AlgoServices/algoserviesdata';

const Itservicessection = () => {
  return (
    <>
    <div className='pt-[40px]'>
        <div className="w-full card-container md:w-[80%] mx-auto h-auto py-5 mt-7 flex justify-evenly flex-row items-center flex-wrap">
          {Algoservicescontent.map((greyCardProps, index) => (
            <GreyCard1 key={index} {...greyCardProps} index={index} />
          ))}
        </div>
    </div>
    </>
  )
}

export default Itservicessection