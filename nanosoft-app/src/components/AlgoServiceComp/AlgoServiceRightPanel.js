"use client";
import { useRouter } from "next/navigation";
import React from "react";

function AlgoServiceRightPanel() {
  const router = useRouter();
  return (
    <div className="bg-white shadow-xl h-auto p-4">
      <h2 className="text-2xl font-semibold text-center pb-4">All Services</h2>
      <div className="flex flex-col justify-between items-center space-y-3">
        <div
          onClick={() => router.push("/api-bridge")}
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <p className="font-medium text-lg text-nowrap">Api Bridge</p>
          <span className="font-bold text-red-500">&#8599;</span>
        </div>

        <div
          onClick={() => router.push("/algo")}
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <p className="font-medium text-lg text-nowrap">Algo Trading</p>
          <span className="font-bold text-red-500">&#8599;</span>
        </div>

        <div
          onClick={() => router.push("/auto")}
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96 p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <p className="font-medium text-lg text-nowrap">
            Auto Buy & Sell Signal
          </p>
          <span className="font-bold text-red-500">&#8599;</span>
        </div>

        <div
          onClick={() => router.push("/strategy")}
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <p className="font-medium text-lg text-nowrap">
            Strategy Development
          </p>
          <span className="font-bold text-red-500">&#8599;</span>
        </div>
      </div>
    </div>
  );
}

export default AlgoServiceRightPanel;
