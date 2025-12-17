import Image from "next/image";
import Option from "@/components/Option";
import PixelV2 from "@/components/pixels/PixelV2";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function Page2({
  handleClick,
}:{
  handleClick: () => void,
}) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (playerRef.current && !playerRef.current.querySelector('vturb-smartplayer')) {
      const el = document.createElement('vturb-smartplayer');
      el.id = 'vid-69401a17ab5e2b20534231ed';
      el.style.display = 'block';
      el.style.margin = '0 auto';
      el.style.width = '100%';
      playerRef.current.appendChild(el);
    }
  }, []);

  return (
    <>
      <PixelV2 />
      <div className="flex flex-col gap-4 text-sm appear">
        {/* Video Player */}
        <div className="w-full rounded-3xl overflow-hidden">
          <div ref={playerRef}></div>
          <Script id="vturb-vid-69401a17ab5e2b20534231ed" strategy="afterInteractive">
            {`
              var s=document.createElement("script");
              s.src="https://scripts.converteai.net/7811ed69-550c-4b89-9a28-8ab5dbe8db56/players/69401a17ab5e2b20534231ed/v4/player.js";
              s.async=!0;
              document.head.appendChild(s);
            `}
          </Script>
        </div>

        {/* Video Info */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Burgerville Big Sassy Cheeseburger</h2>
          <p className="text-sm text-gray-600">251K views - 4 days ago</p>
          <hr className="border-gray-200" />
          
          {/* Channel Info */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <Image
                width="40"
                height="40"
                src="/logos/step-1.png"
                alt="Burgerville"
                className="rounded-full"
              />
              <span className="text-xl font-semibold leading-none text-gray-900">Burgerville</span>
            </div>
            <div className="flex items-center gap-1 bg-green-200 px-2 py-1 rounded-full">
              <Image
                width="16"
                height="16"
                quality={100}
                src="/steps/instagram-verify.png"
                alt="Verified"
              />
              <span className="text-sm font-medium text-green-700">Partner Verified</span>
            </div>
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm">
          <p className="text-lg font-medium leading-none text-gray-900 mb-2 text-center">Answer the question:</p>
          <p className="text-xl font-semibold text-gray-900 text-center mb-4 sm:mb-6">Is this video relevant to you?</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Option onClick={handleClick} className="!bg-gradient-to-br !from-red-500 !to-red-600 !ring-2 !ring-red-300 hover:!ring-red-400 active:!ring-red-500 !shadow-lg hover:!scale-105 active:!scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-3 !p-3 sm:!p-5 !min-h-[60px] sm:!min-h-[70px] flex-nowrap whitespace-nowrap">
            <ThumbsDown size={20} className="sm:w-6 sm:h-6 text-white flex-shrink-0" />
            <span className="text-sm sm:text-base font-bold text-white">Not Relevant</span>
          </Option>
          <Option onClick={handleClick} className="!bg-gradient-to-br !from-green-500 !to-emerald-600 !ring-2 !ring-green-300 hover:!ring-green-400 active:!ring-green-500 !shadow-lg hover:!scale-105 active:!scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-3 !p-3 sm:!p-5 !min-h-[60px] sm:!min-h-[70px] flex-nowrap whitespace-nowrap">
            <ThumbsUp size={20} className="sm:w-6 sm:h-6 text-white flex-shrink-0" />
            <span className="text-sm sm:text-base font-bold text-white">Relevant</span>
          </Option>
          </div>
        </div>
      </div>
    </>
  );

};