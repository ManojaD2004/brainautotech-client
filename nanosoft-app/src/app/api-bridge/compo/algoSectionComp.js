"use client";
import AlgoServiceRightPanel from "@/components/AlgoServiceComp/AlgoServiceRightPanel";
import React from "react";

function UlLiComp({ text }) {
  return (
    <li className="text-black lg:text-left text-center text-md">
      <span className="font-bold text-red-500">&#10004;</span>
      {text}
    </li>
  );
}

function OlLiComp({ text, index }) {
  return (
    <li className="text-black lg:text-left text-center text-md">
      <span className="font-bold ">{index + 1}.</span> {text}
    </li>
  );
}

const UlLiCompData = [
  { text: "Coordination with Amibroker, Excel, Python, MT4 and so forth." },
  {
    text: "Supported Brokers: Fyers, Alice Blue, Zerodha, Upstox, Nirmal Bang, Interactive Brokers, IIFL, 5paisa, GRD, Composite Edge.",
  },
  {
    text: "Permits trading for Multi-Strategies in Multi-Time frame and Multi-Markets in Multi-Client Account Allows Multi-Order Types: L, M, SL-L, SL-M, BO, CO etc.",
  },
  {
    text: "Send custom request amount for each trade dependent on your risk management rules.",
  },
  {
    text: "Consequently select Multi-Strikes through your code for choices trading.",
  },
  {
    text: "Consequently select multi-expiry contracts through your code for choices trading.",
  },
  {
    text: "Trade utilizing diagrams or without outlines through scanner.",
  },
  {
    text: "Doesn't needs VPS, reconnects to a great many virtual worlds interference.",
  },
  {
    text: "Custom Target, SL, time sensitive signs and so on for your code",
  },
  {
    text: "Keep up free pattern of Long Entry, Long Exit, Short Entry and Short Exit signals.",
  },
];

const OlLiCompData = [
  {
    text: `The Bridge works on the basis of "Signals". A Signal is generally a sign (not choice) to Buy or Sell with explicit conditions. The Bridge forms 4 sorts of Signals:`,
  },
  {
    text: "Long Entry (LE): Equivalent to new Buy for making Long position.",
  },
  {
    text: "Long Exit (LX): Equivalent to Sell for decreasing/square off Long position.",
  },
  {
    text: "Short Entry (SE): Equivalent to new Sell for making Short position.",
  },
  {
    text: "Short Exit (SX): Equivalent to Buy for decreasing /square off Short position..",
  },
];

const AlgoSection = () => {
  return (
    <div className="pt-[30px] pb-10 px-[10%] flex flex-col space-y-4 space-x-0 lg:space-y-0 lg:flex-row lg:space-x-4 justify-between">
      <div className="flex flex-col justify-between space-y-5">
        <p className="text-black lg:text-left text-center text-md">
          API Bridge is a set of programming interface, pincode and Places is
          first programming interface right now. APIBridge permits you to algo
          trade with various stages like Amibroker, MT4, TradingView, Python,
          Excel, NinjaTrader and so on.
        </p>
        <h1 className="text-black font-bold text-3xl lg:text-left text-center">
          API Bridge Features
        </h1>
        <ul className="space-y-2">
          {UlLiCompData.map((eleData, index) => (
            <UlLiComp {...eleData} key={index} />
          ))}
        </ul>
        <h1 className="text-black font-bold text-3xl lg:text-left text-center">
          Understanding How API Bridge Work
        </h1>
        <ol className="space-y-2">
          {OlLiCompData.map((eleData, index) => (
            <OlLiComp {...eleData} key={index} index={index} />
          ))}
        </ol>
      </div>
      <div className="">
        <AlgoServiceRightPanel />
      </div>
    </div>
  );
};

export default AlgoSection;
