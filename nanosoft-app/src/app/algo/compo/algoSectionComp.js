"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black lg:text-left text-center text-md">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `Algo Trading is a type of automated trading that utilizes PC programs to examine market 
    data dependent on pre-characterized parameters.`,
  },

  {
    text: `It places trades on the terminal and submits to exchange directly thereby reducing human or 
    manual invention. It will help us to taking automatic decisions and execution, reducing time to act and 
    avoiding human emotions from coming into play while trading by using MetaTrader4 and MetaTrader5.`,
  },
  {
    text: `We will provide you the best platform for doing Auto Trading with your own Intra day and 
    positional based strategies which will save your money and time by Controlling your any emotion and 
    manual intervention. We convert your strategies & logics through our code.`,
  },
  {
    text: `Functioning with software, a computer program will automatically monitor the stock price 
    (and the moving average indicators) and place the buy and sell orders when the defined conditions are met. 
    The trader no longer needs to screen live costs and charts or put in the orders manually. The algorithmic trading 
    system does this automatically by effectively and accurately identifying the trading opportunity.`,
  },
  {
    text: `Algo trading is beneficial for short-term,long-term and every kind of 
    investors due to its number of benefits mentioned below-`,
  },
];

const UlLiCompData = [
  {
    title: `Reasonable price :`,
    description: `Trades are executed at the best possible price.`,
  },
  {
    title: `Errorless :`,
    description: `Reduced risk of manual errors when placing trades.`,
  },
  {
    title: `Zero mistake :`,
    description: `Reduced the possibility of mistakes by human traders based on emotional and psychological factors.`,
  },
  {
    title: `Efficiency :`,
    description: `Trades are timed correctly and instantly to avoid significant price changes.`,
  },
];

const AlgoSection = () => {
  return (
    <div className="pt-[30px] pb-10 px-[10%] flex flex-col space-y-4 space-x-0 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">
      <div className="flex flex-col justify-between space-y-5">
        {SectionCompParaData.map((eleData, index) => (
          <SectionCompPara {...eleData} key={index} />
        ))}
        <h1 className="text-black font-bold text-3xl lg:text-left text-center">
          Some Benefits for you
        </h1>
        <ul className="px-2 !mt-0">
          {UlLiCompData.map((eleData, index) => (
            <UlLiCompAlgoSection {...eleData} key={index} />
          ))}
        </ul>
      </div>
      <div className="">
        <AlgoServiceRightPanel />
      </div>
    </div>
  );
};

export default AlgoSection;
