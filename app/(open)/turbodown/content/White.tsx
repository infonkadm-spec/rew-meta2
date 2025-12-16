"use client";

import React from "react";
import Button from "@/components/Button";

export default function White() {
  return (
    <>
      <div className="w-full text-sm bg-red-600 text-white">
        <div className="mx-auto px-4 py-4">
          <div className="text-center font-semibold">
            You won a big discount!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-4xl gap-6 px-5 py-6 mx-auto bg-gray-50">
        <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-white appear border-t px-5 py-6 -mb-5 border-gray-200">
          <div className="space-y-4">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Scaling Bosses
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Publishing & Scale
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Turn your production into a sustainable system.
            </p>
            <p className="text-base text-gray-700">
              Batch-schedule, measure what matters, and adjust with ease to maintain long-term consistency.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 rounded-xl border-2 border-dashed shadow-lg p-5 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-500">
            <span className="font-semibold text-lg text-gray-900">Includes:</span>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Batch production and early scheduling.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Key metrics to review and improve.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-gray-700">Organization to sustain a professional pace.</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 font-medium">
                Educational program. Does not guarantee growth or results.
              </p>
            </div>
            
            {/* HOTMART - Sales Funnel Widget */}
            <div id="hotmart-sales-funnel"></div>

            {/* Checkout Actions */}
            <div style={{ width: "100%", maxWidth: "100%", margin: "0 auto" }} className="flex flex-col items-center gap-3">
              <a href="https://explodely.com/p/1518255626?ocu=yes" className="w-full">
                <Button className="!w-full !bg-green-600 !border-green-700 hover:!bg-green-500">
                  I agree to pay $20 monthly
                </Button>
              </a>
              <a href="/bienvenido" className="text-blue-700 hover:underline text-sm">
                No, thanks
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-xs text-gray-500 px-6 py-6">
        Disclaimer: The earnings or income examples shared on this website are for informational purposes only and do not guarantee results. Your success depends on many factors outside our control, and individual results will vary.
      </footer>
    </>
  );
} 