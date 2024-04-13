"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import UlLiCompAlgoSection from "@/components/AlgoServiceComp/UlLiCompAlgoSection";
import React from "react";

function SectionCompPara({ text }) {
  return <p className="text-black lg:text-left text-center text-md">{text}</p>;
}

const SectionCompParaData = [
  {
    text: `1 . Trading and Investment Strategy Development: ‎ We also develop automatic trading strategies for every segment including Option Premium Strategies on Tradingview and on other 8 trading softwares or servers in minimum costing. After strategy, you can take our platform for buy and sell of signals or indicators on the chart of your strategy according to your given parameters.
    
    
    MT4 and MT5 indicators, master advisors, calculators, and even 
    money management formulas are the main Trading tools. Most of these 
    tools are special indicators. These tools have one main objective, to 
    assist brokers with estimating future value changes.`,
  },

  {
    text: `2. Trading and Investment servers: ‎  Currently we are providing strategy coding in 9 trading and investment platforms like Tradingview, Mt4, Amibroker, Chartink, Mt5, Stockmock, Algotest, Streak, Python and others. As per your choice you can ask us to develop your strategy on anyone. We develop trading and investment strategies on all these platforms.  
    We at Brain Auto Tech with a group of expert MT4/MT5 
    software engineers to build up your trading strategy. Quite a long 
    while of experience committed to MT5 and MT4 programming promise you 
    to get a MQL4 Expert Advisor (EA), an Indicator or a Script as per 
    your desires. No Need to break down the Market Status profoundly by 
    the Trader.`,
  },
  {
    text: `There is no presence of manual intercession, fear, 
    selfness and panic won't come into Auto trading. EA avoids 
    troubles of the trading and it conveys the peaceful trade to 
    the dealers and financial specialists.`,
  },
  {
    text: `You can utilize MQL4 to make custom indicators and contents 
    other than Expert Advisors. Custom pointers are full analogs to 
    worked in specialized indicators. They are essential for breaking 
    down value elements of financial instruments and indicating trade 
    alerts. And, if accessible specialized indicators aren't sufficient, 
    you can make your own.`,
  },
];

const UlLiCompData = [
  {
    title: `Expert Advisor Auto Trading Robot:`,
    description: `No compelling reason to invest time before trading 
    terminal. The EA consequently play out the trading tasks according 
    to your strategy.`,
  },
  {
    title: `Scripts :`,
    description: `Scripts are smallest programs that robotize 
    every now and again rehashed activities. We can program custom s
    cripts for you. Script executed just once.`,
  },
  {
    title: `Indicators :`,
    description: `We give MT4 and MT5 Indicator programming services. 
    Indicators are utilized to ascertain and show the data in visual 
    structure.`,
  },
  {
    title: `Security :`,
    description: `Get support from our professionals who better 
    understands the whole structure.`,
  },
];

const AlgoSection = () => {
  return (
    <div className="pt-[40px] pb-10 px-[10%] flex flex-col space-y-4 space-x-0 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">
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
