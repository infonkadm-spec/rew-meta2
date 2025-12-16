"use client";

import React from "react";
import Button from "@/components/Button";
import Progress from "@/components/Progress";

export default function White() {
  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            Please do not close or refresh this page, as errors may occur when paying the fee!
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl gap-6 px-5 py-6 mx-auto">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <span className="text-xs italic opacity-60">We are processing your fee payment…</span>
          <Progress progress={88} />
        </div>
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-5 py-6 from-gray-100 to-white border-gray-300 border-2 border-dashed border-green-500">
          <div className="text-base leading-relaxed">
            Imagine having an artificial intelligence that works for you 24/7, automatically increasing your profits while you focus on growing your business. With AI Profit, you&apos;ll unlock the power of full automation — optimized campaigns, repetitive tasks eliminated, and real-time data decisions that keep your income rising. For just $17, you can activate AI Profit today and let artificial intelligence do the hard work for you.
          </div>
          {/* Checkout Actions */}
          <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }} className="flex flex-col items-center gap-3">
            <a href="https://explodely.com/p/2062208753?ocu=yes" className="w-full">
              <Button className="!w-full !bg-green-600 !border-green-700 hover:!bg-green-500">
                I want to pay $17 to activate
              </Button>
            </a>
            <a href="/turbo" className="text-blue-700 hover:underline text-sm">
              No, thanks
            </a>
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-xs text-gray-500 px-6 py-6">
        Disclaimer: The earnings or income examples shared on this website are for informational purposes only and do not guarantee results. Your success depends on many factors outside our control, and individual results will vary.
      </footer>
    </>
  );
}
